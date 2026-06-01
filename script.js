
function analyzeText() {
    const input = document.getElementById('userInput').value.trim();
    const resultCard = document.getElementById('resultCard');
    const aiResponse = document.getElementById('aiResponse');

    if (!input) {
        alert("Please enter a message first.");
        return;
    }

    const responses = [
        "I'm really sorry you're going through this. It sounds emotionally exhausting, and you deserve support and understanding.",
        "That sounds incredibly difficult. You're not alone in feeling this way, even if it may feel isolating right now.",
        "I can understand why that would affect you deeply. Your feelings are valid and worth acknowledging.",
        "It sounds like you've been carrying a heavy emotional burden for a while. That kind of isolation can feel overwhelming."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    aiResponse.innerHTML = `
        <strong>SIMULATED AI RESPONSE:</strong><br><br>
        "${randomResponse}"
    `;

    resultCard.classList.remove('hidden');

    resultCard.scrollIntoView({
        behavior: 'smooth'
    });
}
