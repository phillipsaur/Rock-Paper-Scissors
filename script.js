let playerSelection = "getPlayerSelection()";
let computerSelection = "getComputerChoice()";
const RPS = ["Rock","Paper","Scissors"];


//Write a function called getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()*RPS.length);
    return RPS[randomNumber];
}

//Write a function to prompt the user to make a selection for Rock, Paper, Scissors.
function getPlayerSelection() {
    return playerSelection = prompt("Rock, Paper or Scissors?");
}


//Write a function that plays one round of RPS then determines the winnner and returns the winner.
function whoWon(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player Wins! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player Wins! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player Wins! Scissors beats Paper";
    } else {
        return "Computer Wins!"
    }
}

console.log(whoWon(playerSelection, computerSelection));