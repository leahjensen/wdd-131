const words = ["javascript", "hangman", "programming", "coding", "developer"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let wrongLetters = [];
const maxAttempts = 6;
let wrongGuessCount = 0;

function displayWord() {
    const wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
}

function displayWrongLetters() {
    const wrongLettersContainer = document.getElementById("wrongLettersContainer");
    wrongLettersContainer.innerHTML = `Wrong Letters: ${wrongLetters.join(', ')}`;
}

function updateHangman() {
    const parts = [
        document.getElementById("head"),
        document.getElementById("body"),
        document.getElementById("leftArm"),
        document.getElementById("rightArm"),
        document.getElementById("leftLeg"),
        document.getElementById("rightLeg")
    ];

    // Show the corresponding parts of the hangman based on wrong guesses
    if (wrongGuessCount < parts.length) {
        parts[wrongGuessCount].style.display = 'block';
    }
}

function checkGameOver() {
    const message = document.getElementById("message");
    if (wrongLetters.length >= maxAttempts) {
        message.innerHTML = `Game Over! The word was "<strong>${selectedWord}</strong>".`;
    } else if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
        message.innerHTML = "Congratulations! You've guessed the word!";
    }
}

document.getElementById("guessButton").addEventListener("click", () => {
    const letterInput = document.getElementById("letterInput");
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';

    if (!letter || guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
        return;
    }

    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongLetters.push(letter);
        wrongGuessCount++;
        updateHangman();
    }

    displayWord();
    displayWrongLetters();
    checkGameOver();
});

// Initialize the game
displayWord();
displayWrongLetters();
