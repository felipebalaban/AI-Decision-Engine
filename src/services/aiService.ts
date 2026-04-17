import { GoogleGenAI } from "@google/genai";
import { decisionSchema, type Decision} from "../schemas/decisionSchema"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


export async function analyzeText(texto: string): Promise<Decision> {
    const prompt = `
    Você é um motor de decisão de backend.
    Analise o texto do usuário e responda APENAS com um JSON válido.
    Não escreva explicações fora do JSON.

    O JSON deve seguir exatamente este formato:
    {
    "categoria": "telefonia | energia | banco | aerea | internet | outros",
    "prioridade": "baixa | media | alta",
    "canal_recomendado": "string",
    "tom": "calmo | formal | formal_firme",
    "confianca": number,
    "justificativa_curta": "string"
    }

    Texto do usuário:
    ${texto}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: prompt,
    })

    const rawText = response.text?.trim();

    if(!rawText) {
        throw new Error("Gemini returned an empty response.")
    }

    const parsed = JSON.parse(rawText)

    return decisionSchema.parse(parsed);
}