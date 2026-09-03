// ============================================
// app.js - Express Application Setup
// ============================================
// This file configures the Express app with:
//   - CORS (so React frontend can talk to us)
//   - Body parsing (JSON + large payloads)
//   - API routes
//   - Error handling
// ============================================

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Import all routes (bundled in one index file)
import routes from './routes/index.js';

// Import the global error handler
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

// ---- Create the Express App ----
const app = express();

// ============================================
// MIDDLEWARE (runs on every request, in order)
// ============================================

// 1. CORS: Allow our frontend to talk to this backend
const rawOrigins = process.env.CLIENT_URL || "http://localhost:5173";
const allowedOrigins = rawOrigins.split(",").map((url) => url.trim().replace(/\/+$/, ""));

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      const cleanOrigin = origin.replace(/\/+$/, "");

      // Check explicit allowed origins list
      if (allowedOrigins.includes(cleanOrigin) || allowedOrigins.includes("*")) {
        return callback(null, true);
      }

      // Automatically allow all Vercel deployment domains (*.vercel.app)
      try {
        const url = new URL(cleanOrigin);
        if (
          url.hostname.endsWith(".vercel.app") ||
          url.hostname === "localhost" ||
          url.hostname === "127.0.0.1"
        ) {
          return callback(null, true);
        }
      } catch (e) {
        // invalid URL format, ignore
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

// 2. Body Parser: Convert incoming JSON requests to JavaScript objects
//    10mb limit to handle large resume text and interview data
app.use(express.json({ limit: '10mb' }));

// ============================================
// HEALTH CHECK & ROOT ROUTES
// ============================================

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Personalized AI Interview Backend is running",
    environment: process.env.NODE_ENV || "development",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

// ============================================
// ROUTES
// ============================================

// Mount all API routes under /api
// /api/auth      → authentication routes
// /api/interview → interview routes (start, answer, feedback)
// /api/resume    → resume upload and parsing routes
// /api/history   → interview history routes
app.use("/api", routes);

// ============================================
// ERROR HANDLING (must be AFTER routes)
// ============================================

// Handle 404 - Route not found
app.use(notFoundHandler);

// Handle all other errors (500, validation errors, etc.)
app.use(errorHandler);

// Export the app (used in server.js)
export default app;
