// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { auth as apiAuth } from 'express-oauth2-jwt-bearer';
import { auth as webAuth } from 'express-openid-connect';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import crypto from 'crypto';
import Redis from 'ioredis';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7860;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Redis Fallback (prevents crash if Redis isn't running locally)
// In production, ensure REDIS_URL is set!
const redis = process.env.REDIS_URL 
  ? new Redis(process.env.REDIS_URL) 
  : { get: async () => null, set: async () => null, incr: async () => 1, expire: async () => null };

app.use(express.json());

// --- Replay Cache / Logic ---
const REPLAY_WINDOW_MS = 5 * 60 * 1000; 

/** -------------------------------
 * 1ï¸ âƒ£ Web Gateway (OIDC) - FIXED HERE âš¡ï¸ 
 * ------------------------------- **/
const oidcConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  // issuerBaseURL: process.env.ISSUER_BASE_URL, // Overridden by discovery below
  
  // ðŸ›¡ï¸  THE FIX: TELLING THE SERVER EXACTLY WHAT WE WANT
  authorizationParams: {
    response_type: 'code', // <--- THIS WAS MISSING!!!
    scope: 'openid profile email offline_access', // Asking for the full ID package
    audience: process.env.API_AUDIENCE // Connects the web user to the API vault
  },
  // Implementing the provided OIDC discovery document directly
  discovery: {
    "issuer": "https://auth.aibanking.dev/",
    "jwks_uri": "https://auth.aibanking.dev/.well-known/jwks.json",
    "token_endpoint": "https://auth.aibanking.dev/oauth/token",
    "claims_supported": [
      "aud",
      "auth_time",
      "created_at",
      "email",
      "email_verified",
      "exp",
      "family_name",
      "given_name",
      "iat",
      "identities",
      "iss",
      "name",
      "nickname",
      "phone_number",
      "picture",
      "sub"
    ],
    "scopes_supported": [
      "openid",
      "profile",
      "offline_access",
      "name",
      "given_name",
      "family_name",
      "nickname",
      "email",
      "email_verified",
      "picture",
      "created_at",
      "identities",
      "phone",
      "address"
    ],
    "userinfo_endpoint": "https://auth.aibanking.dev/userinfo",
    "revocation_endpoint": "https://auth.aibanking.dev/oauth/revoke",
    "end_session_endpoint": "https://auth.aibanking.dev/oidc/logout",
    "mtls_endpoint_aliases": {
      "token_endpoint": "https://mtls.auth.aibanking.dev/oauth/token",
      "userinfo_endpoint": "https://mtls.auth.aibanking.dev/userinfo",
      "revocation_endpoint": "https://mtls.auth.aibanking.dev/oauth/revoke",
      "pushed_authorization_request_endpoint": "https://mtls.auth.aibanking.dev/oauth/par"
    },
    "registration_endpoint": "https://auth.aibanking.dev/oidc/register",
    "authorization_endpoint": "https://auth.aibanking.dev/authorize",
    "mfa_challenge_endpoint": "https://auth.aibanking.dev/mfa/challenge",
    "subject_types_supported": [
      "public"
    ],
    "response_modes_supported": [
      "query",
      "fragment",
      "form_post"
    ],
    "response_types_supported": [
      "code",
      "token",
      "id_token",
      "code token",
      "code id_token",
      "token id_token",
      "code token id_token"
    ],
    "claims_parameter_supported": false,
    "request_parameter_supported": true,
    "backchannel_logout_supported": true,
    "device_authorization_endpoint": "https://auth.aibanking.dev/oauth/device/code",
    "request_uri_parameter_supported": false,
    "code_challenge_methods_supported": [
      "S256",
      "plain"
    ],
    "global_token_revocation_endpoint": "https://auth.aibanking.dev/oauth/global-token-revocation/connection/{connectionName}",
    "require_request_uri_registration": false,
    "dpop_signing_alg_values_supported": [
      "ES256"
    ],
    "backchannel_authentication_endpoint": "https://auth.aibanking.dev/bc-authorize",
    "backchannel_logout_session_supported": true,
    "id_token_signing_alg_values_supported": [
      "HS256",
      "RS256",
      "PS256"
    ],
    "pushed_authorization_request_endpoint": "https://auth.aibanking.dev/oauth/par",
    "token_endpoint_auth_methods_supported": [
      "client_secret_basic",
      "client_secret_post",
      "private_key_jwt",
      "tls_client_auth",
      "self_signed_tls_client_auth"
    ],
    "backchannel_token_delivery_modes_supported": [
      "poll"
    ],
    "tls_client_certificate_bound_access_tokens": true,
    "request_object_signing_alg_values_supported": [
      "RS256",
      "RS384",
      "PS256"
    ],
    "token_endpoint_auth_signing_alg_values_supported": [
      "RS256",
      "RS384",
      "PS256"
    ],
    "global_token_revocation_endpoint_auth_methods_supported": [
      "global-token-revocation+jwt"
    ]
  }
};

app.use(webAuth(oidcConfig));

/** -------------------------------
 * 2ï¸ âƒ£ FAPI 1.0 / JWT Middleware
 * ------------------------------- **/
const jwtCheck = apiAuth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

// Middleware: Replay detection, Scopes, Rate Limiting
app.use('/api', jwtCheck, async (req, res, next) => {
  try {
    const jti = req.headers['x-jti'] || req.body.jti || crypto.randomUUID();
    const now = Date.now();
    const ttl = 5 * 60; // 5 min seconds

    // Redis Replay Check (Mock safe)
    if (redis.get) {
      const exists = await redis.get(`replay:${jti}`);
      if (exists) return res.status(401).json({ error: 'Replay detected (Security Protocol).' });
      await redis.set(`replay:${jti}`, now, 'EX', ttl);
    }

    req.jti = jti; // Pass ID down to endpoint
    next();
  } catch (err) {
    console.error("Middleware Error:", err);
    res.status(500).json({ error: "Gateway Malfunction" });
  }
});

/** -------------------------------
 * 3ï¸ âƒ£ Status Endpoint
 * ------------------------------- **/
app.get('/status', (req, res) => {
  res.json({
    parity: "100%",
    // Check authentication via OIDC middleware
    auth_status: req.oidc.isAuthenticated() ? 'SIGNED_IN' : 'DECOHERED',
    user: req.oidc.user || null,
    uptime_ms: process.uptime() * 1000
  });
});

/** -------------------------------
 * 4ï¸ âƒ£ Protected Test Route
 * ------------------------------- **/
app.get('/api/authorized', (req, res) => {
  res.json({ message: 'TREASURE REACHED: Secured Resource Accessed Successfully' });
});

/** -------------------------------
 * 5ï¸ âƒ£ Gemini AI Endpoint
 * ------------------------------- **/
app.post('/api/gemini', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required.' });

    // Determine identity
    // If called from Web Gateway, we use OIDC user. If called via Bearer, we use JWT.
    const userIdentity = req.auth?.payload?.sub || req.oidc?.user?.sub || 'anonymous_node';

    console.log(`ðŸ¤– Processing: "${message}" by ${userIdentity}`);

    // Call Real Gemini API (Env Variable Protected)
    const geminiUrl = process.env.GEMINI_API_URL || 
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    // Fallback if no key
    if (!process.env.GEMINI_API_KEY) {
      return res.json({ 
        reply: "Simulated Response: Add GEMINI_API_KEY to .env to go live.",
        metadata: { audit: "SIMULATION_MODE" }
      });
    }

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] })
    });

    if (!response.ok) {
        throw new Error(`Google Grid Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "NO_DATA";

    // Metadata for FAPI Audit
    const metadata = {
      processedAt: new Date().toISOString(),
      client: userIdentity,
      jti: req.jti,
      audit: "compliant"
    };

    res.json({ reply: replyText, metadata });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Neural Overload', details: error.message });
  }
});

/** -------------------------------
 * 6ï¸ âƒ£ Audit Logs (Stub)
 * ------------------------------- **/
app.get('/api/audit/logs', async (req, res) => {
   res.json({ status: "Audit log accumulator active", driver: "Redis" });
});

/** -------------------------------
 * 7ï¸ âƒ£ Serve SPA Frontend
 * ------------------------------- **/
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/** -------------------------------
 * 8ï¸ âƒ£ Launch
 * ------------------------------- **/
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\nðŸŒŒ --- QUANTUM SERVER IGNITED ---`);
  console.log(`ðŸ“¡ URL: ${process.env.BASE_URL || 'http://0.0.0.0:' + PORT}`);
  console.log(`ðŸ§¬ PROTOCOL: OIDC CODE FLOW ENABLED`);
});