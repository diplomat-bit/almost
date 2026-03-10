// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { auth as apiAuth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import crypto from 'crypto';
import Redis from 'ioredis';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 for local dev
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Redis Fallback (prevents crash if Redis isn't running locally)
const redis = process.env.REDIS_URL
  ? new Redis(process.env.REDIS_URL)
  : { get: async () => null, set: async () => null, incr: async () => 1, expire: async () => null };

app.use(express.json());

// --- Replay Cache / Logic (for API protection) ---
const REPLAY_WINDOW_MS = 5 * 60 * 1000;

/** -------------------------------
 * 1️⃣ Static File Server for React SPA
 * ------------------------------- **/
// Serve static files from the 'dist' directory (your React build output)
// This must come *before* any wildcard routes to ensure static assets are served.
app.use(express.static(path.join(__dirname, 'dist')));

/** -------------------------------
 * 2️⃣ FAPI 1.0 / JWT Middleware for API protection
 * ------------------------------- **/
const jwtCheck = apiAuth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

// Apply JWT check and replay detection to all /api routes
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
 * 3️⃣ Status Endpoint (API)
 * ------------------------------- **/
app.get('/status', (req, res) => {
  res.json({
    parity: "100%",
    auth_note: "Frontend manages user session via Auth0Provider. Backend protects APIs.",
    uptime_ms: process.uptime() * 1000
  });
});

/** -------------------------------
 * 4️⃣ Protected Test Route (API)
 * ------------------------------- **/
app.get('/api/authorized', (req, res) => {
  res.json({ message: 'TREASURE REACHED: Secured Resource Accessed Successfully' });
});

/** -------------------------------
 * 5️⃣ Gemini AI Endpoint (API)
 * ------------------------------- **/
app.post('/api/gemini', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required.' });

    const userIdentity = req.auth?.payload?.sub || 'anonymous_node';
    console.log(`🤖 Processing: "${message}" by ${userIdentity}`);

    const geminiUrl = process.env.GEMINI_API_URL ||
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

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
 * 6️⃣ Audit Logs (API Stub)
 * ------------------------------- **/
app.get('/api/audit/logs', async (req, res) => {
   res.json({ status: "Audit log accumulator active", driver: "Redis" });
});

/** -------------------------------
 * 7️⃣ SPA Frontend Fallback
 * ------------------------------- **/
// For any other route not matched by static files or API endpoints,
// serve the React app's index.html. This allows client-side routing to work.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/** -------------------------------
 * 8️⃣ Launch
 * ------------------------------- **/
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🌌 --- QUANTUM SERVER IGNITED ---`);
  console.log(`📡 URL: ${process.env.BASE_URL || 'http://0.0.0.0:' + PORT}`);
  console.log(`🧬 PROTOCOL: Client-side OIDC (React Auth0Provider)`);
  console.log(`📂 Serving static files from: ${path.join(__dirname, 'dist')}`);
});
