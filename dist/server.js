"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const analyze_1 = __importDefault(require("./routes/analyze"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "AI Decision Engine rodando",
    });
});
app.use("/api/analyze", analyze_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
