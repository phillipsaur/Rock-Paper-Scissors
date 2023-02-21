console.log('Hi');

const RPS = ["Rock","Paper","Scissors"];


//Write a function called getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    const computerChoice = RPS[Math.floor(Math.random()*RPS.length)];
    console.log(computerChoice);
    return computerChoice;
}

//Write a function that plays one round of RPS then determines the winnner and returns the winner.
function whoWon(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock")
    {
        return "Player";
    } else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection) {
    let result = whoWon(playerSelection, computerSelection);

    if(result == "Tie") {
        return "It's a Tie!";
    } else if (result = "Player") {
        return `The Player Wins! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `The Computer Wins! ${computerSelection} beats ${playerSelection}.`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

/*
//Write a function to prompt the user to make a selection for Rock, Paper, Scissors.
function getPlayerSelection() {
    return playerSelection = prompt("Rock, Paper or Scissors?");
}

getComputerChoice();



console.log(whoWon(playerSelection, computerSelection));
*/