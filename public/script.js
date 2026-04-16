const analyzeBtn = document.getElementById("analyzeBtn");
const textoInput = document.getElementById("texto");
const result = document.getElementById("result");

analyzeBtn.addEventListener("click", async()=> {
    const texto = textoInput.value;

    result.textContent="Loading..."

    try {
        const response = await fetch("/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({texto})
        })

        const data = await response.json();

        result.textContent = JSON.stringify(data, null, 2)
    }
    catch(error) {
        result.textContent = "Error connecting to the server."
    }
})