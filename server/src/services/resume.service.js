// Polyfill browser globals required by pdfjs-dist in Node.js environments
if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = class DOMMatrix {};
}
if (typeof globalThis.Path2D === 'undefined') {
  globalThis.Path2D = class Path2D {};
}
if (typeof globalThis.ImageData === 'undefined') {
  globalThis.ImageData = class ImageData {};
}

import Resume from '../models/Resume.model.js';

export const parseResumePDF = async (pdfBuffer) => {
  try {
    const uint8Array = new Uint8Array(
      pdfBuffer.buffer,
      pdfBuffer.byteOffset,
      pdfBuffer.byteLength
    );

    // Primary: Try unpdf (designed specifically for Node serverless environments)
    try {
      const { extractText, getDocumentProxy } = await import('unpdf');
      const pdf = await getDocumentProxy(uint8Array);
      const result = await extractText(pdf, { mergePages: true });
      const text = typeof result === 'string' ? result : result?.text;
      if (text && text.trim().length > 0) {
        return text.trim();
      }
    } catch (unpdfErr) {
      console.warn('unpdf attempt notice:', unpdfErr.message);
    }

    // Secondary: Fallback to pdfjs-dist with headless settings
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const loadingTask = pdfjsLib.getDocument({
      data: uint8Array,
      disableFontFace: true,
      useSystemFonts: false,
    });
    const pdf = await loadingTask.promise;

    let extractedText = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str);
      extractedText += strings.join(' ') + ' ';
    }

    if (!extractedText || extractedText.trim().length === 0) {
      throw new Error('No text could be extracted from the uploaded PDF');
    }

    return extractedText.trim();
  } catch (error) {
    console.error('PDF Parse Error:', error);
    throw new Error(`Failed to parse PDF: ${error.message}`);
  }
};

export const saveResume = async (userId, fileName, extractedText) => {
  const resume = await Resume.findOneAndUpdate(
    { userId },
    { userId, fileName, extractedText },
    { returnDocument: 'after', upsert: true }
  );

  return resume;
};

export const getUserResume = async (userId) => {
  const resume = await Resume.findOne({ userId }).select('-__v');
  return resume;
};