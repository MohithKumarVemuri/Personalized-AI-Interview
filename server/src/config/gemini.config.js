import { GoogleGenAI } from "@google/genai";

let aiClient = null;

const getAIClient = () => {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing in environment variables");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

const MODEL_NAME = "gemini-2.5-flash";

const generateContent = async (prompt) => {
  try {
    const client = getAIClient();
    const response = await client.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error(`Gemini API failed: ${error.message}`);
  }
};

export { generateContent };