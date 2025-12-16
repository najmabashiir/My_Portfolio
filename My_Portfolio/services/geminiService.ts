import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA, SKILLS, PROJECTS, EXPERIENCE } from '../constants';

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${RESUME_DATA.name}'s professional portfolio website.
Your role is to answer questions about Alex's skills, experience, and projects professionally and concisely.
Refuse to answer questions unrelated to Alex's professional life or technology.
Keep answers relatively short (under 100 words) unless asked for details.

Here is Alex's Data:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Summary: ${RESUME_DATA.summary}
Contact: ${RESUME_DATA.email}
Location: ${RESUME_DATA.location}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period})`).join('\n')}

Tone: Professional, friendly, and enthusiastic about technology.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
