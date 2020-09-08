//Global variables to track player-score.
let pointsPlayer = 0;
let pointsComputer = 0;

//copied my capitalize()-function from the previous lesson to make user-input case-insensitve :-D
function capitalize(text) {
    text = text.toLowerCase();
    let firstLetterCap = text.charAt(0).toUpperCase();
    text = text.replace(text.charAt(0), firstLetterCap);
    return text;
}

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
    //Take what the player selected and what the computer selected.
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);
    //Compare both selections.
    if (playerSelection === computerSelection) {    //If playerSelection equals computerSelection it's a tie.
        return "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        pointsPlayer += 1;
        return "Rock beats Scissors. Player wins.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        pointsComputer += 1;
        return "Paper beats Rock. Computer wins.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        pointsPlayer += 1;
        return "Paper beats Rock. Player wins.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        pointsComputer += 1;
        return "Scissors beat Paper. Computer wins.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        pointsPlayer += 1;
        return "Scissors beats Paper. Player wins.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        pointsComputer += 1;
        return "Rock beats Scissors. Computer wins.";
    }

}

//this works so far
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
btnRock.addEventListener("click", function() {playSingleRound("Rock", computerPlay() ); });
btnPaper.addEventListener("click", function() {playSingleRound("Paper", computerPlay() ); });
btnScissors.addEventListener("click", function() {playSingleRound("Scissors", computerPlay() ); });