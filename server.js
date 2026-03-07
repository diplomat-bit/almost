import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { auth as webAuth } from "express-openid-connect";
import { auth as jwtAuth } from "express-oauth2-jwt-bearer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7860;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* ================================
   SECURITY + PARSING
================================ */

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true
  })
);

/* ================================
   RATE LIMIT
================================ */

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  message: { error: "Too many requests, slow down!" }
});

app.use("/api", apiLimiter);

/* ================================
   AUTH0 WEB LOGIN
================================ */

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

/* ================================
   JWT API PROTECTION
================================ */

const jwtCheck = jwtAuth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: "RS256"
});

app.use("/api", jwtCheck);

/* ================================
   STATUS ROUTE
================================ */

app.get("/status", (req, res) => {
  res.json({
    server: "ONLINE",
    auth_status: req.oidc?.isAuthenticated?.() ? "SIGNED_IN" : "ANONYMOUS",
    user: req.oidc?.user || null
  });
});

/* ================================
   TEST AUTH ROUTE
================================ */

app.get("/api/authorized", (req, res) => {
  res.json({
    message: "API ACCESS CONFIRMED",
    user: req.user || null
  });
});

/* ================================
   GEMINI AI ENDPOINT
================================ */

app.post("/api/gemini", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log(`🤖 GEMINI PROCESSING: "${message}"`);

    // Simulate AI computation
    await new Promise((r) => setTimeout(r, 600));

    res.json({
      reply: `ENTITY AUTHORIZED. Analysis of "${message}" complete.`,
      metadata: {
        timestamp: new Date().toISOString(),
        request_id: Math.random().toString(36).substr(2, 9)
      }
    });

  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ error: "AI processing failed", details: error.message });
  }
});

/* ================================
   STATIC FRONTEND
================================ */

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* ================================
   START SERVER
================================ */

app.listen(PORT, "0.0.0.0", () => {
  console.log("\n🌌 --- QUANTUM SERVER ONLINE ---");
  console.log(`📡 URL: ${process.env.BASE_URL || `http://0.0.0.0:${PORT}`}`);
  console.log(`🔐 AUTH ISSUER: ${process.env.ISSUER_BASE_URL}`);
  console.log(`🎯 API AUDIENCE: ${process.env.API_AUDIENCE}`);
  console.log("🤖 GEMINI ROUTE: /api/gemini\n");
});
