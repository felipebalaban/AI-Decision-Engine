const analyzeBtn = document.getElementById("analyzeBtn");
const textoInput = document.getElementById("texto");
const status = document.getElementById("status");
const result = document.getElementById("result");

analyzeBtn.addEventListener("click", async()=> {
    const texto = textoInput.value.trim();

    if(!texto) {
        status.textContent = "Please enter some text first.";
        result.textContent = "No response yet.";
        return;
    }

    status.textContent = "Sending request...";
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

        status.textContent = "Request completed.";
        result.textContent = JSON.stringify(data, null, 2)
    }
    catch(error) {
        status.textContent = "Request failed.
        result.textContent = "Error connecting to the server."
    }
})