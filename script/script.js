function getComputerChoice() {
    const possibleWords = ["rock", "paper", "scissors"];

    return possibleWords[Math.floor(Math.random() * possibleWords.length)];;
}

function playRound(playerSelection, computerSelection) {


    playerSelection = prompt("Choose your hand:").toLowerCase();
    computerSelection = getComputerChoice();

    if((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        isDraw = true;
    } else if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        isComputer = true;
    } else if((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
        isPlayer = true;
    } else {
        alert("No such hand! Try again!");
        return playRound();
    }

}


function game() {

    for(let i = 0; i < 5; i ++) {
        playRound();

        if(isComputer) {
            compWinCount++;
        } else if(isPlayer) {
            playerWinCount++;
        } else {
            alert("No winner in this round")
        }
    }

    if(compWinCount === playerWinCount) {
        alert("It's a draw!");
    } else if(compWinCount > playerWinCount) {
        alert("You lose!");
    } else {
        alert("You win!");
    }

}



let isPlayer = false;
let isComputer = false;
let isDraw = false;
let compWinCount = 0;
let playerWinCount = 0;



