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

function computerPlay() {
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

function game() {
    //play a five round game, keep score, report winner/loser at the end.
    for (i = 1; i <= 5; i++) {
        console.log("Round " + i);
        //store user-input in a variable
        let userInput = prompt("Round " + i + "of 5. Choose \"Rock\", \"Paper\" or \"Scissors\"!");

        // and if it is not empty and the user didn't cancel make it case-insensitve.
        if (!userInput) {
            console.log("No input or cancelled");
        } else {
            userInput = capitalize(userInput);

            //If spelled correctly go on with the round.
            if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
                console.log(playSingleRound(userInput, computerPlay()));
                console.log("Player-Score: " + pointsPlayer);
                console.log("Computer-Score: " + pointsComputer);
                // If not spelled right print error message.    
            } else {
                console.log("Wrong input! Only \"Rock\", \"Paper\" or \"Scissors\" will work.");
            }
        }
    }
    console.log("The Game is finished!");
    if (pointsPlayer === pointsComputer) {
        console.log("It's a tie! Final score Player vs. Computer: " + pointsPlayer + "-" + pointsComputer);
    } else if (pointsPlayer >= pointsComputer) {
        console.log("Congratulations, you won! Final score Player vs. Computer: " + pointsPlayer + "-" + pointsComputer);
    } else {
        console.log("Sorry, you lost! Final score Player vs. Computer: " + pointsPlayer + "-" + pointsComputer);
    }

}

game();
