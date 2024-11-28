// Math Game Logic
let score = 0;
let currentQuestion;
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-answer");
const feedbackElement = document.getElementById("feedback");

const questions = [
    { question: "5 + 3", answer: 8 },
    { question: "12 - 4", answer: 8 },
    { question: "7 + 6", answer: 13 },
    { question: "9 - 5", answer: 4 },
    { question: "15 + 7", answer: 22 }
];

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    questionElement.textContent = "What is " + currentQuestion.question + "?";
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        feedbackElement.textContent = "Correct! Your score is: " + score;
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Oops! Try again.";
        feedbackElement.style.color = "red";
    }
    answerInput.value = "";
    setTimeout(generateQuestion, 1500);
}

submitButton.addEventListener("click", checkAnswer);

// Initialize the first question
generateQuestion();
