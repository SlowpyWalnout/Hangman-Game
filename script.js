// Lista de palabras con sus pistas
const words = [
    { word: "migration", hint: "Movement of people from one place to another" },
    { word: "society", hint: "A community of people living together" },
    { word: "neighborhood", hint: "A specific area within a city" },
    { word: "culture", hint: "The ideas, customs, and social behavior of a group" },
    { word: "art", hint: "Creative expression in forms like painting or sculpture" },
    { word: "communication", hint: "The process of sharing information or ideas" },
    { word: "education", hint: "The system of learning and teaching" },
    { word: "innovation", hint: "The introduction of new ideas or methods" },
    { word: "technology", hint: "Tools and systems created to solve problems" },
    { word: "environment", hint: "The natural world around us" },
    { word: "pollution", hint: "Harmful substances introduced into the environment" },
    { word: "climate", hint: "The weather conditions of an area over a long period" },
    { word: "species", hint: "A group of organisms capable of interbreeding" },
    { word: "economy", hint: "The system of production and consumption in a society" },
    { word: "innovation", hint: "A new method or idea that transforms practices" },
    { word: "memory", hint: "The ability to recall past events or information" },
    { word: "migration", hint: "Relocation of groups to improve quality of life" },
    { word: "quality", hint: "The standard of something as measured against others" },
    { word: "habitat", hint: "The natural home of a plant or animal" },
    { word: "history", hint: "The study of past events" },
    { word: "future", hint: "The time yet to come" },
    { word: "language", hint: "A system of communication used by a particular group" },
    { word: "tradition", hint: "Customs or beliefs passed down through generations" },
    { word: "migration", hint: "Movement of people for better living conditions" },
    { word: "freedom", hint: "The power or right to act or think without constraint" },
    { word: "justice", hint: "Fair treatment according to law and ethics" },
    { word: "community", hint: "A group of people living in the same area" },
    { word: "transportation", hint: "Systems used to move people or goods" },
    { word: "celebration", hint: "A joyful event to honor something special" },
    { word: "emotion", hint: "A feeling such as happiness, anger, or sadness" },
    { word: "adventure", hint: "An unusual or exciting experience" },
    { word: "creativity", hint: "The ability to produce original and unusual ideas" },
    { word: "teamwork", hint: "The combined effort of a group to achieve a goal" },
    { word: "inspiration", hint: "A sudden good idea or motivation" },
    { word: "innovation", hint: "Introducing something new" },
    { word: "perspective", hint: "A particular way of considering something" },
    { word: "conversation", hint: "A spoken exchange of thoughts or ideas" },
    { word: "destination", hint: "The place someone or something is going to" },
    { word: "knowledge", hint: "Information and skills acquired through learning" },
    { word: "challenge", hint: "A task that tests ability or skill" },
    { word: "exploration", hint: "The action of traveling to discover new things" },
    { word: "leadership", hint: "The ability to guide or influence others" },
    { word: "compassion", hint: "Sympathy and concern for others' suffering" },
    { word: "growth", hint: "The process of increasing in size or development" },
    { word: "progress", hint: "Advancement toward a goal" },
    { word: "recycling", hint: "The process of converting waste into reusable materials" },
    { word: "responsibility", hint: "A duty or task one is required to carry out" },
    { word: "education", hint: "The act of learning and teaching" },
    { word: "success", hint: "Achieving a desired aim or result" },
    { word: "sustainability", hint: "Meeting needs without compromising the future" },
    { word: "diversity", hint: "Variety within a group or environment" },
    { word: "happiness", hint: "The state of being happy or content" },
    { word: "imagination", hint: "The ability to form new ideas or concepts" },
    { word: "volunteer", hint: "A person who freely offers to do something" },
    { word: "confidence", hint: "Belief in one's abilities or qualities" },
    { word: "gratitude", hint: "Thankfulness for something received" },
    { word: "curiosity", hint: "A desire to learn or know more" },
    { word: "resilience", hint: "The ability to recover from challenges" },
    { word: "friendship", hint: "A close and mutual bond with others" },
    { word: "peace", hint: "Freedom from conflict or disturbance" },
    { word: "adversity", hint: "Difficulties or misfortune" },
    { word: "dream", hint: "A hope or ambition for the future" },
    { word: "health", hint: "The state of being free from illness" },
    { word: "family", hint: "A group of related individuals" },
    { word: "identity", hint: "The qualities or beliefs that define a person or group" },
    { word: "hope", hint: "A feeling of expectation for a positive outcome" },
    { word: "teamwork", hint: "Working collaboratively to achieve goals" },
    { word: "celebration", hint: "The act of marking a special event" },
    { word: "nature", hint: "The physical world and its features" },
    { word: "opportunity", hint: "A set of circumstances that make something possible" },
    { word: "value", hint: "The importance or worth of something" },
    { word: "safety", hint: "The condition of being protected from harm" },
    { word: "creativity", hint: "The use of imagination to create" },
    { word: "adventure", hint: "An exciting or unusual experience" },
    { word: "vision", hint: "The ability to think about the future with imagination" },
    { word: "dedication", hint: "Commitment to a task or purpose" },
    { word: "empowerment", hint: "Giving someone the authority or power to do something" },
    { word: "reflection", hint: "Serious thought or consideration" },
    { word: "freedom", hint: "The power to act, speak, or think without hindrance" },
    { word: "change", hint: "The act of making something different" },
    { word: "balance", hint: "A state of equilibrium" },
    { word: "success", hint: "Achievement of an aim or purpose" },
    { word: "legacy", hint: "Something handed down from the past" },
    { word: "journey", hint: "An act of traveling from one place to another" },
    { word: "skills", hint: "The ability to do something well" },
    { word: "passion", hint: "A strong feeling or emotion" },
    { word: "integrity", hint: "Adherence to moral and ethical principles" },
    { word: "energy", hint: "The capacity for activity or work" },
    { word: "connection", hint: "A link or bond between people or things" },
];


let selectedWordObj = words[Math.floor(Math.random() * words.length)];
let selectedWord = selectedWordObj.word.toLowerCase();
let hint = selectedWordObj.hint;
let attempts = 6;
let guessedLetters = [];
let incorrectGuesses = 0;

// Elementos del DOM
const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-box img");
const hintText = document.querySelector(".hint-text b");
const guessesText = document.querySelector(".guesses-text b");
const keyboard = document.querySelector(".keyboard");

const lostModal = document.querySelector(".game-modal.lost");
const winModal = document.querySelector(".game-modal.win");
const lostPlayAgainButton = lostModal.querySelector(".play-again");
const winPlayAgainButton = winModal.querySelector(".play-again");

// Inicialización del juego
function initializeGame() {
    hintText.textContent = hint;
    guessesText.textContent = `${incorrectGuesses} / ${attempts}`;
    wordDisplay.innerHTML = selectedWord
        .split("")
        .map(() => '<li class="letter"></li>')
        .join("");
    generateKeyboard();
}

// Generar teclado dinámico
function generateKeyboard() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    keyboard.innerHTML = "";
    alphabet.split("").forEach((letter) => {
        const button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", () => handleGuess(letter, button));
        keyboard.appendChild(button);
    });
}

// Manejar intentos de adivinar
function handleGuess(letter, button) {
    if (guessedLetters.includes(letter) || incorrectGuesses >= attempts) return;

    guessedLetters.push(letter);
    button.disabled = true;

    if (selectedWord.includes(letter)) {
        updateWordDisplay(letter);
        if (checkWin()) endGame(true);
    } else {
        incorrectGuesses++;
        guessesText.textContent = `${incorrectGuesses} / ${attempts}`;
        updateHangmanImage();
        if (incorrectGuesses >= attempts) endGame(false);
    }
}

// Actualizar la visualización de la palabra
function updateWordDisplay(letter) {
    const letters = document.querySelectorAll(".word-display .letter");
    selectedWord.split("").forEach((char, index) => {
        if (char === letter) {
            letters[index].textContent = letter.toUpperCase();
            letters[index].classList.add("guessed");
        }
    });
}

// Comprobar si el jugador ha ganado
function checkWin() {
    return selectedWord.split('').every(letter => guessedLetters.includes(letter));
}

// Actualizar la imagen del ahorcado
function updateHangmanImage() {
    hangmanImage.src = `src/images/hangman-${incorrectGuesses}.svg`;
}

// Finalizar el juego
function endGame(win) {
    if (win) {
        winModal.style.display = "flex";
    } else {
        lostModal.style.display = "flex";
        lostModal.querySelector("p b").textContent = selectedWord.toUpperCase();
    }
}

// Reiniciar el juego
function resetGame() {
    incorrectGuesses = 0;
    guessedLetters = [];
    selectedWordObj = words[Math.floor(Math.random() * words.length)];
    selectedWord = selectedWordObj.word.toLowerCase();
    hint = selectedWordObj.hint;

    hangmanImage.src = 'src/images/hangman-0.svg';

    lostModal.style.display = "none";
    winModal.style.display = "none";
    initializeGame();
}

lostPlayAgainButton.addEventListener("click", resetGame);
winPlayAgainButton.addEventListener("click", resetGame);

// Inicializar el juego al cargar la página
initializeGame();
