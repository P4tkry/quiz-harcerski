function getTimeUntilNext10AM() {
    const now = new Date();
    let next10AM = new Date();
    next10AM.setHours(10, 0, 0, 0);

    if (now.getHours() >= 10) {
        next10AM.setDate(next10AM.getDate() + 1);
    }

    return Math.floor((next10AM - now) / 1000);
}

let timeLeft = getTimeUntilNext10AM();
let timerInterval;

function startTimer() {
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswers();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Pozostały czas do wybuchu bomby: ${hours}h ${minutes}m ${seconds}s`;
            timeLeft--;
        }
    }, 1000);
}

function checkAnswers() {
    clearInterval(timerInterval); // Stop the timer when the quiz is submitted
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

document.addEventListener('DOMContentLoaded', (event) => {
    startTimer();
});

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'E') {
        window.location = "https://www.youtube.com/watch?v=nN2eZos7HN0"
    }
});