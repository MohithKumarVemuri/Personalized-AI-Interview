// Polyfill browser globals required by pdfjs-dist and other web libraries in Node serverless
if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = class DOMMatrix {};
}
if (typeof globalThis.Path2D === 'undefined') {
  globalThis.Path2D = class Path2D {};
}
if (typeof globalThis.ImageData === 'undefined') {
  globalThis.ImageData = class ImageData {};
}

export const config = {
  maxDuration: 60,
};

let cachedApp = null;
let cachedConnectDB = null;

export default async function handler(req, res) {
  try {
    if (!cachedApp || !cachedConnectDB) {
      const appModule = await import('../server/src/app.js');
      const dbModule = await import('../server/src/config/db.config.js');
      cachedApp = appModule.default;
      cachedConnectDB = dbModule.default;
    }

    // Connect to MongoDB
    await cachedConnectDB();

    // Delegate request to Express app
    return cachedApp(req, res);
  } catch (err) {
    console.error('Serverless Handler Error:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Server initialization failed',
      stack: process.env.NODE_ENV === 'production' ? err.stack : undefined,
    });
  }
}
