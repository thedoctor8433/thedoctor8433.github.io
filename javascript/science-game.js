// Science Quiz Game Logic
let score = 0;
let currentQuestionIndex = 0;
const questions = [
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Liver", "Skin"],
        answer: "Skin"
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "What is the process of a caterpillar turning into a butterfly called?",
        options: ["Metamorphosis", "Photosynthesis", "Respiration", "Germination"],
        answer: "Metamorphosis"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-answer");
const feedbackElement = document.getElementById("feedback");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Display new options
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("btn", "btn-option");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => selectOption(option));
        optionsElement.appendChild(optionButton);
    });
}

let selectedAnswer = "";

function selectOption(answer) {
    selectedAnswer = answer;
    const buttons = document.querySelectorAll(".btn-option");
    buttons.forEach(button => button.classList.remove("selected"));
    event.target.classList.add("selected");
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        feedbackElement.textContent = `Correct! Your score is: ${score}`;
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is: ${currentQuestion.answer}`;
        feedbackElement.style.color = "red";
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(showFinalScore, 1500);
    }
}

function showFinalScore() {
    feedbackElement.textContent = `Quiz Over! Your final score is: ${score} out of ${questions.length}`;
    submitButton.textContent = "Restart Quiz";
    submitButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    submitButton.textContent = "Submit Answer";
    loadQuestion();
    feedbackElement.textContent = "";
}

submitButton.addEventListener("click", checkAnswer);

// Initialize the first question
loadQuestion();
