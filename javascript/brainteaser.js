// Initialize game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
let attemptsLeft = 10;
let guessedCorrectly = false;

// Accessing DOM elements
const submitButton = document.getElementById('submit-guess');
const userGuessInput = document.getElementById('user-guess');
const hintElement = document.getElementById('hint');
const attemptsLeftElement = document.getElementById('attempts-left');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-game');

// Function to handle guess submission
submitButton.addEventListener('click', () => {
    const userGuess = parseInt(userGuessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        guessedCorrectly = true;
        resultElement.textContent = "Congratulations! You've guessed the number!";
        hintElement.textContent = "";
    } else if (userGuess > randomNumber) {
        resultElement.textContent = "Too high! Try again.";
    } else {
        resultElement.textContent = "Too low! Try again.";
    }

    if (attemptsLeft === 0 && !guessedCorrectly) {
        resultElement.textContent = `Game over! The correct number was ${randomNumber}.`;
        hintElement.textContent = "";
    }

    // Update attempts left
    attemptsLeftElement.textContent = attemptsLeft;

    // Show restart button if game is over
    if (attemptsLeft === 0 || guessedCorrectly) {
        submitButton.disabled = true;
        restartButton.style.display = "inline-block";
    }
});

// Function to restart the game
restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    guessedCorrectly = false;
    submitButton.disabled = false;
    restartButton.style.display = "none";
    hintElement.textContent = "Try to guess the number!";
    resultElement.textContent = "";
    attemptsLeftElement.textContent = attemptsLeft;
    userGuessInput.value = "";
});
