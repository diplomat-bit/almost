// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { auth as apiAuth } from 'express-oauth2-jwt-bearer';
import { auth as webAuth } from 'express-openid-connect';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7860;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

// --- Replay Cache (in-memory for demo; replace with Redis or DB in prod) ---
const replayCache = new Map();
const REPLAY_WINDOW_MS = 5 * 60 * 1000; // 5 min

/** -------------------------------
 * 1️⃣ Web Gateway (OIDC)
 * ------------------------------- **/
const oidcConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};
app.use(webAuth(oidcConfig));

/** -------------------------------
 * 2️⃣ FAPI 1.0 / JWT Middleware
 * ------------------------------- **/
const jwtCheck = apiAuth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

// Middleware for replay detection & scopes
app.use('/api', jwtCheck, (req, res, next) => {
  const jti = req.headers['x-jti'] || req.body.jti || crypto.randomUUID();
  const now = Date.now();

  // Replay detection
  if (replayCache.has(jti)) {
    return res.status(401).json({ error: 'Replay detected.' });
  }
  replayCache.set(jti, now);
  setTimeout(() => replayCache.delete(jti), REPLAY_WINDOW_MS);

  // Scope enforcement placeholder
  // req.jwt = decoded JWT from apiAuth middleware
  const scopes = req.jwt?.scope?.split(' ') || [];
  if (!scopes.includes('gemini:chat')) {
    return res.status(403).json({ error: 'Insufficient scope.' });
  }

  req.jti = jti;
  next();
});

/** -------------------------------
 * 3️⃣ Status Endpoint
 * ------------------------------- **/
app.get('/status', (req, res) => {
  res.json({
    parity: "100%",
    auth_status: req.oidc.isAuthenticated() ? 'SIGNED_IN' : 'DECOHERED',
    user: req.oidc.user || null,
    uptime_ms: process.uptime() * 1000
  });
});

/** -------------------------------
 * 4️⃣ Protected Test Route
 * ------------------------------- **/
app.get('/api/authorized', (req, res) => {
  res.json({ message: 'TREASURE REACHED: Secured Resource Accessed Successfully' });
});

/** -------------------------------
 * 5️⃣ Gemini AI Endpoint
 * ------------------------------- **/
app.post('/api/gemini', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required.' });

    console.log(`🤖 Processing: "${message}" by ${req.jwt?.sub || 'anonymous'}`);

    // Call Gemini API
    const response = await fetch(process.env.GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: message })
    });

    const data = await response.json();

    // Metadata for audit
    const metadata = {
      processedAt: new Date().toISOString(),
      client: req.jwt?.sub || 'anonymous',
      jti: req.jti,
      inputLength: message.length,
      outputLength: data.reply?.length || 0
    };

    res.json({
      reply: data.reply || 'No response from Gemini AI.',
      metadata
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Neural Overload', details: error.message });
  }
});

/** -------------------------------
 * 6️⃣ Audit & Analytics Endpoints
 * ------------------------------- **/
app.get('/api/audit/logs', (req, res) => {
  // Placeholder: return replayCache info
  res.json({
    activeRequests: replayCache.size,
    recentJTI: Array.from(replayCache.keys())
  });
});

/** -------------------------------
 * 7️⃣ Tiered Monetization & Rate Limiting (Placeholder)
 * ------------------------------- **/
app.use('/api', (req, res, next) => {
  // Example: per-client usage tracking
  // Integrate DB + billing engine
  // req.clientUsage = ...
  next();
});

/** -------------------------------
 * 8️⃣ Serve SPA Frontend
 * ------------------------------- **/
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/** -------------------------------
 * 9️⃣ Launch Server
 * ------------------------------- **/
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🌌 --- QUANTUM SERVER IGNITED ---`);
  console.log(`📡 URL: ${process.env.BASE_URL || 'http://0.0.0.0:' + PORT}`);
  console.log(`🧬 LOGIC PARITY: ASCENDED\n`);
});
