import { AssemblyAI } from 'assemblyai';
import fs from 'fs';
import path from 'path';
import os from 'os';

let assemblyClient = null;

const getAssemblyClient = () => {
  if (!assemblyClient) {
    const apiKey = process.env.ASSEMBLYAI_API_KEY;
    if (!apiKey) {
      throw new Error('ASSEMBLYAI_API_KEY is missing in environment variables');
    }
    assemblyClient = new AssemblyAI({ apiKey });
  }
  return assemblyClient;
};

export const transcribeAudio = async (audioBuffer, originalName) => {
  const extension = path.extname(originalName) || '.webm';
  const tempPath = path.join(os.tmpdir(), `interview-audio-${Date.now()}${extension}`);

  try {
    fs.writeFileSync(tempPath, audioBuffer);

    const client = getAssemblyClient();
    const transcript = await client.transcripts.transcribe({
      audio: tempPath,
      speech_models: ['universal-2'],
    });

    if (transcript.status === 'error') {
      throw new Error(`Transcription failed: ${transcript.error}`);
    }

    return transcript.text || '[No speech detected in the recording]';
  } catch (error) {
    console.error('AssemblyAI Transcription Error:', error.message);
    throw new Error('Speech-to-text service is currently unavailable.');
  } finally {
    try {
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    } catch (cleanupError) {
      console.error('Temp file cleanup error:', cleanupError.message);
    }
  }
};