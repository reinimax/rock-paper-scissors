//Global variables to track player-score.
let pointsPlayer = 0;
let pointsComputer = 0;

//disable buttons
const selectbtn = document.querySelectorAll(".btnSelect");
selectbtn.forEach(b => b.addEventListener("click", function(e){playSingleRound(`${e.target.id}`, computerPlay() );}));
selectbtn.forEach(b => b.disabled = true);

//variables for score and text
const instructions = document.querySelector("#instructions");
const log = document.querySelector("#log");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");


const computerPlay = function () {
    //pick randomly between "Rock" "Paper" or "Scissor" and return the value.
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playSingleRound(playerSelection, computerSelection) {
    
    log.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}.`

    //Compare both selections.
    if (playerSelection === computerSelection) {    //If playerSelection equals computerSelection it's a tie.
    log.textContent += " It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        pointsPlayer += 1;
        const playerScoreField = document.querySelector("#player-score-field");
        playerScoreField.addEventListener("animationend", function() {
            playerScoreField.classList.remove("animated");
        });
        playerScoreField.classList.add("animated");
        log.textContent += " Rock beats Scissors. Player wins.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        pointsComputer += 1;
        log.textContent += " Paper beats Rock. Computer wins.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        pointsPlayer += 1;
        log.textContent += " Paper beats Rock. Player wins.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        pointsComputer += 1;
        log.textContent += " Scissors beat Paper. Computer wins.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        pointsPlayer += 1;
        log.textContent += " Scissors beats Paper. Player wins.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        pointsComputer += 1;
        log.textContent += " Rock beats Scissors. Computer wins.";
    }
    updateScore();
}

function updateScore() {
    playerScore.textContent = `${pointsPlayer}`;
    computerScore.textContent = `${pointsComputer}`;

    if (pointsPlayer >= 5) {
        instructions.textContent = `You won!`;
        endGame();
    }
    
    if (pointsComputer >= 5) {
        instructions.textContent = `Computer won!`;
        endGame();
    }
}

function endGame() {
    selectbtn.forEach(b => b.disabled = true);
}

function startGame() {
    //Select the three buttons and add an eventlistener to each, play one round with player-input = id of the targeted button
    selectbtn.forEach(b => b.disabled = false);

    //clear score and log
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    instructions.textContent = "The first who gets 5 points wins.";
    log.textContent = 'Choose one option:';

    //reset points
    pointsPlayer = 0;
    pointsComputer = 0;
}

const start = document.querySelector("#start");
start.addEventListener("click", startGame);
