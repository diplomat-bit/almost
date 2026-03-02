import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { auth as apiAuth } from 'express-oauth2-jwt-bearer'; // PROTECTS THE BITS
import { auth as webAuth } from 'express-openid-connect';  // HANDLES THE REDIRECTS
import dotenv from 'dotenv';

// 1. NEURAL CORE HYDRATION
dotenv.config();
const app = express();
const PORT = process.env.PORT || 7860; // HUGGING FACE MEGA-PORT
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

// ⚡️ STAGE 1: THE WEB GATEWAY CONFIG (User Login Portal)
// This handles /login and /callback automatically
const oidcConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET || 'a-very-long-128-bit-frequency-string-32-chars',
  baseURL: 'http://localhost:3000', // YOUR HF URL!!
  clientID: 'IzBLtCQSn08EFefVGGIRrKUvEyWhzJOS', // THE PASSCODE
  issuerBaseURL: 'https://aibankinguniversity.us.auth0.com',
};

// 🛡️ STAGE 2: THE API VAULT LOCK (Bearer Token Check)
// This matches your CITI / POSTMAN Mock coordinates
const jwtCheck = apiAuth({
  // TARGET AUDIENCE (Must match what you created in Auth0 Dashboard!!)
  audience: 'https://aibankinguniversity.us.auth0.com/me/', 
  issuerBaseURL: 'https://aibankinguniversity.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

/** 🌀 MIDDLEWARE INJECTION 🌀 **/

// Open the web doors (Stage 1)
app.use(webAuth(oidcConfig));

// Lock the data vaults (Stage 2) - Protects ALL /api routes
app.use('/api', jwtCheck);

/** 🌩️ REAL-TIME COMMAND ROUTES 🌩️ **/

// Status Endpoint
app.get('/status', (req, res) => {
    res.json({
        parity: "100%",
        auth_status: req.oidc.isAuthenticated() ? 'SIGNED_IN' : 'DECOHERED',
        user: req.oidc.user || null
    });
});

// Protected Test Route
app.get('/api/authorized', (req, res) => {
    res.json({ message: 'TREASURE REACHED: Secured Resource Accessed Successfully' });
});

// Authorized Gemini AI Logic Ingress
app.post('/api/gemini-chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Data Fragment Required.' });

    console.log(`🤖 AI CORE: PROCESSING "${message}"...`);

    // Simulated Handshake
    await new Promise(r => setTimeout(r, 600));

    res.json({ 
        reply: `ENTITY AUTHORIZED. Analysis of "${message}" results in Quantum Drift.`,
        cfo_intel: "Exfiltration pipeline active."
    });

  } catch (error) {
    res.status(500).json({ error: 'Neural Overload', details: error.message });
  }
});

/** 🏗️ SYSTEM LAYOUT: SERVING THE UI **/

// Serves your built Vite app
app.use(express.static(path.join(__dirname, 'dist')));

// THE CATCH-ALL REDUNDANCY: Prevents 404s on browser refreshes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// --- IGNITION ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🌌 --- QUANTUM SERVER IGNITED ---`);
  console.log(`📡 URL: http://0.0.0.0:${PORT}`);
  console.log(`🗝️  AUDIENCE ID: https://aibankinguniversity.us.auth0.com/me/`);
  console.log(`🧬 LOGIC PARITY: ASCENDED\n`);
});