import app from '../server/src/app.js';
import connectDB from '../server/src/config/db.config.js';

export const config = {
  maxDuration: 60,
};

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.error('Failed to connect to MongoDB in serverless handler:', err.message);
    return res.status(500).json({
      success: false,
      message: `Database connection failed: ${err.message}`,
    });
  }

  return app(req, res);
}
