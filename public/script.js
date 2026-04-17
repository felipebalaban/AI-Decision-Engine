const analyzeBtn = document.getElementById("analyzeBtn");
const textoInput = document.getElementById("texto");
const status = document.getElementById("status");
const result = document.getElementById("result");

const categoria = document.getElementById("categoria");
const prioridade = document.getElementById("prioridade");
const canal = document.getElementById("canal");
const tom = document.getElementById("tom");
const confianca = document.getElementById("confianca");
const justificativa = document.getElementById("justificativa");

analyzeBtn.addEventListener("click", async()=> {
    const texto = textoInput.value.trim();

    if(!texto) {
        status.textContent = "Please enter some text first.";
        result.textContent = "No response yet.";
        categoria.textContent = "-";
        prioridade.textContent = "-";
        canal.textContent = "-";
        tom.textContent = "-";
        confianca.textContent = "-";
        justificativa.textContent = "-";
        return;
    }

    status.textContent = "Sending request...";
    result.textContent="Loading..."

    categoria.textContent = "-";
    prioridade.textContent = "-";
    canal.textContent = "-";
    tom.textContent = "-";
    confianca.textContent = "-";
    justificativa.textContent = "-";

    try {
        const response = await fetch("/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({texto})
        })

        const data = await response.json();

        status.textContent = "Request completed.";
        result.textContent = JSON.stringify(data, null, 2)

        categoria.textContent = data.categoria ?? "-";
        prioridade.textContent = data.prioridade ?? "-";
        canal.textContent = data.canal_recomendado ?? "-";
        tom.textContent = data.tom ?? "-";
        confianca.textContent = data.confianca ?? "-";
        justificativa.textContent = data.justificativa_curta ?? "-";
    }
    catch(error) {
        status.textContent = "Request failed.";
        result.textContent = "Error connecting to the server.";
        categoria.textContent = "-";
        prioridade.textContent = "-";
        canal.textContent = "-";
        tom.textContent = "-";
        confianca.textContent = "-";
        justificativa.textContent = "-";
    }
})