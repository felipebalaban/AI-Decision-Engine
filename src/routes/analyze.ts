import { Router } from "express";
const router = Router();

router.post("/", (req,res)=> {
    const { texto } = req.body;

    if(!texto) {
        return res.status(400).json({
            error: 'O campo "texto" é obrigatório.',
        })
    }

    return res.json({
        message: "Texto recebido com sucesso.",
        textoRecebido: texto
    })
})

export default router