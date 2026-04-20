import "dotenv/config";
import express from "express";
import path from "path";
import analyzeRoute from "./routes/analyze";


const app = express();
const PORT = 3000;

app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))

app.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "AI Decision Engine rodando",
    })
})

app.use("/api/analyze", analyzeRoute)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})