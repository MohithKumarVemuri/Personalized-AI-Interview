// ============================================
// db.config.js - MongoDB Connection
// ============================================
// Connects to MongoDB Atlas using Mongoose.
// Reference: mongoose.connect() - reference-mongodb.md
// ============================================

import mongoose from 'mongoose';

let isConnecting = null;

const connectDB = async () => {
  // If already connected, reuse existing connection
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  // Get the connection string from environment variables
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error('MONGODB_URI is not defined in your environment variables');
  }

  if (!isConnecting) {
    isConnecting = mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    }).catch((err) => {
      isConnecting = null;
      throw err;
    });
  }

  try {
    const conn = await isConnecting;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    throw error;
  }
};

export default connectDB;
