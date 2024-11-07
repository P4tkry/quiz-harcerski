function checkAnswers() {
    let score = 0;
    const resultElement = document.getElementById('result');

    const answers = {
        q1: "szkodliwy kod",
        q2: "10",
        q3: "World Wide Web",
        q4: "Krok po kroku",
        q5: "JavaScript",
        q6: "Szukanie błędów",
        q7: "Instrukcje",
        q8: "Program na telefon",
    };

    for (let i = 1; i <= 8; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === answers[`q${i}`]) {
            score++;
        }
    }

    resultElement.textContent = `Twój wynik: ${score} / 8`;
    resultElement.style.color = score >= 8 ? '#00ff00' : '#ff0000';
    resultElement.textContent += score >= 8 ? ' - Świetna robota! - Pierwsze hasło to: informatyka' : ' - Spróbuj ponownie!';
}

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'E') {
        window.location = "https://www.youtube.com/watch?v=nN2eZos7HN0"
    }
});