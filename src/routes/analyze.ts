import { Router } from "express";
import { analyzeText } from "../services/aiService";

const router = Router();

router.post("/", async (req,res)=> {
    const { texto } = req.body;

    if(!texto) {
        return res.status(400).json({
            error: 'O campo "texto" é obrigatório.',
        })
    }

    try {
        const decision = await analyzeText(texto);
        return res.json(decision)
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro ao analisar o texto."
        })
    }

})

export default router