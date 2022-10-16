function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return num === 0 ? "Rock"
         : num === 1 ? "Paper"
         : "Scissors";
}

let computerSelection = computerPlay();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie! Nobody wins.");
        return null
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You Lose! Paper beats Rock.");
        return false
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You Win! Scissors beats Paper.");
        return true
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You Lose! Rock beats Scissors.");
        return false
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper.");
        return false
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You Win! Paper beats Rock.");
        return true
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You Win! Rock beats Scissors.");
        return true
    }
}
   
function game() {
    let playerSelection, computerSelection, result;
    let playerWins = 0;
    let computerWins = 0;
    const selections = ["ROCK", "PAPER", "SCISSORS"];
    for (let i =0; i < 5; i++) {
        playerSelection = prompt("Pick a move");
        computerSelection = computerPlay();
    console.log(`User plays ${playerSelection}, Computer plays ${computerSelection}`);
    result = (playRound(playerSelection, computerSelection));
   
    if (result) {
        playerWins += 1;
    } else if (result === false) {
        computerWins += 1;
    }
      console.log(`Current score - player: ${playerWins}, Computer: ${computerWins}`);
    }
     if (playerWins > computerWins) {
        return "User Wins!"
     } else if (computerWins > playerWins) {
        return "Computer Wins! You lose"
     } else {
        return "No one wins! Play again?"
     }
}

console.log(game());
 