import { decisionSchema, type Decision} from "../schemas/decisionSchema"

export function analyzeText(texto: string): Decision {
    const fakeAiResponse = {
        categoria: "outros",
        prioridade: "media",
        canal_recomendado: "email",
        tom: "formal",
        confianca: 0.85,
        justificativa_curta: `Texto recebido: ${texto}`
    };

    return decisionSchema.parse(fakeAiResponse)
}