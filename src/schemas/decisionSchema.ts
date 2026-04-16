import { z } from "zod";

export const decisionSchema = z.object({
    categoria: z.enum([
        "telefonia",
        "energia",
        "banco",
        "aerea",
        "internet",
        "outros",
    ]),
    prioridade: z.enum(["baixa", "media", "alta"]),
    canal_recomendado: z.string(),
    tom: z.enum(["calmo", "formal", "formal_firme"]),
    confianca: z.number(),
    justificativa_curta: z.string(),
});

export type Decision = z.infer<typeof decisionSchema>