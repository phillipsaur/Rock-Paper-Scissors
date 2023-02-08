const playerSelection = "rOck";
const computerSelection = "getComputerChoice()";
const RPS = ["Rock","Paper","Scissors"];


//Write a function called getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()*RPS.length);
    return RPS[randomNumber];
}


//Write a function that plays one round of RPS then determines the winnner and returns the winner.
function whoWon(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    switch(playerSelection) {
        case "rock":
            switch(computerSelection){
                case "Rock":
                    console.log("Tie!");
                    break;
                case "Paper":
                    console.log("Computer Wins!");
                    break;
                case "Scissors":
                    console.log("Player Wins!");
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "Rock":
                    console.log("Player Wins!");
                    break;
                case "Paper":
                    console.log("Tie!");
                    break;
                case "Scissors":
                    console.log("Computer Wins!");
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "Rock":
                    console.log("Computer Wins!");
                    break;
                case "Paper":
                    console.log("Player Wins!");
                    break;
                case "Scissors":
                    console.log("Tie!");
                    break;
            }
            break;
    }
}

console.log(whoWon(playerSelection, computerSelection));