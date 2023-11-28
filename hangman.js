let SubmitBtn = document.querySelector("#myButton");
let RestartBtn = document.querySelector("#restartButton");
let input = document.querySelector("#input1");
let pick = document.querySelector("#pick");
let guess = document.querySelector("#guess");
let healthID = document.querySelector("#healthID")
let image = document.querySelector("#image");
let lose = new Audio("meow.mp3");
let guessCorrect = new Audio("guessCorrect.mp3");
let wrong = new Audio("wrong.wav");
let values = "";
let indexesFound = "";
let word;
let wordSpace;
let rand;
let health = 6;
let isDead = false;

let wordList = ["KEYBOARD","COMPUTER","MOUNTAIN","SENTENCE","BASEBALL","BLIZZARD","DEFINITE","ADDITION","ACCIDENT","EARDROPS"];
let wordListSpace = ["K E Y B O A R D ","C O M P U T E R ","M O U N T A I N ","S E N T E N C E ","B A S E B A L L ",
                    "B L I Z Z A R D ","D E F I N I T E ","A D D I T I O N ","A C C I D E N T ","E A R D R O P S "];
BeginPlay();

SubmitBtn.addEventListener("click", OnClick);
RestartBtn.addEventListener("click", BeginPlay)


// Whenever a new game is started
function BeginPlay() {
    rand = Math.floor(Math.random() * 10);
    word = wordList[rand];
    wordSpace = wordListSpace[rand];
    guess.textContent = "_ _ _ _ _ _ _ _";
    pick.textContent = "Chosen Letters: ";
    health = 6;
    healthID.textContent = "Health: " + health;
    values = "";
    indexesFound = "";
    isDead = false;
    image.src="hangmanHealth6.png";
}

// When the guess button is pressed
function OnClick() {
    input.value = input.value.toUpperCase();
    if (IsLetter() == true) {
        if (IsAvailable() == true && isDead == false) {
            AddValues();
            CheckWord();
        }
    }
    input.value = "";
}
// Adds the new values to Chosen Letters text and values var
function AddValues() {
    pick.textContent = pick.textContent + " " + input.value;
    values += input.value;
}

// Checks if Letter has been used already
function IsAvailable() {
    for (var j = 0; j < values.length; j++) {
        if (input.value == values[j] || input.value == "") {
            return false;
        }
    }
    return true;
}

// Check if Input is a Letter or not
function IsLetter() {
    if (input.value.charCodeAt(0) > 64 && input.value.charCodeAt(0) < 91) {
        return true;
    } else {
        return false;
    }
}


// Check if Letter is in word
function CheckWord() {

    let wasInWord = false;
    for (let i = 0; i < word.length; i++) {
        if (input.value == word[i]) {
            UpdateGuess(i, input.value);
            wasInWord = true;
        }
    }
    if (wasInWord == false) {
        wrong.volume = 0.25;
        wrong.currentTime = 0;
        wrong.play();
        TakeDamage();
    }
}

// Letter is in word
function UpdateGuess(index) {
    guessCorrect.volume = 0.5;
    guessCorrect.currentTime = 1;
    guessCorrect.play();
    let temp = "";
    for (let i = 0; i < 8; i++) {
        let temp1 = false;
        
        // If Letter is found
        if (i == index && temp1 == false) {
            indexesFound += index;
            temp += input.value + " ";
            temp1 = true;
        }
        // Check if letter was found previously
        for (let j = 0; j < indexesFound.length; j++) {
            if (indexesFound[j] == i.toString() && temp1 == false) {
                temp += word[i] + " ";
                temp1 = true;
            }
        }
        
        // Letter missing
        if (temp1 == false) {
            temp += "_ ";
        }
    }
    guess.textContent = temp;
    if (guess.textContent == wordSpace) {
        WinGame();
    }
}

function TakeDamage() {
    health--;
    healthID.textContent = "Health: " + health;
    if (health == 5) {
        image.src="hangmanHealth5.png";
    }
    if (health == 4) {
        image.src="hangmanHealth4.png";
    }
    if (health == 3) {
        image.src="hangmanHealth3.png";
    }
    if (health == 2) {
        image.src="hangmanHealth2.png";
    }
    if (health == 1) {
        image.src="hangmanHealth1.png";
    }
    if (health <= 0) {
        isDead = true;
        image.src="Lose.png";
        Lose();
    }
}

function WinGame() {
    console.log("YOU WIN THE GAME");
    healthID.textContent = "YOU WIN!!";
}

function Lose() {
    lose.play();
    lose.volume = 1.0;
    console.log("You Lose");
    healthID.textContent = "YOU LOSE!!";
}
