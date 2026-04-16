"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const { texto } = req.body;
    if (!texto) {
        return res.status(400).json({
            error: 'O campo "texto" é obrigatório.',
        });
    }
    return res.json({
        message: "Texto recebido com sucesso.",
        textoRecebido: texto
    });
});
exports.default = router;
