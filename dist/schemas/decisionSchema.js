"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decisionSchema = void 0;
const zod_1 = require("zod");
exports.decisionSchema = zod_1.z.object({
    categoria: zod_1.z.enum([
        "telefonia",
        "energia",
        "banco",
        "aerea",
        "internet",
        "outros",
    ]),
    prioridade: zod_1.z.enum(["baixa", "media", "alta"]),
    canal_recomendado: zod_1.z.string(),
    tom: zod_1.z.enum(["calmo", "formal", "formal_firme"]),
    confianca: zod_1.z.number(),
    justificativa_curta: zod_1.z.string(),
});
