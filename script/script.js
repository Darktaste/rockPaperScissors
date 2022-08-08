const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const rock = '🪨';
const paper = '📜';
const scissors = '✂';
let compWinCount = 0;
let playerWinCount = 0;
let roundResult = "";
let gameResult = "";


// getting random computer choice
function getComputerChoice() {
    const possibleWords = [rock, paper, scissors];

    return possibleWords[Math.floor(Math.random() * possibleWords.length)];;
}

// logic for the game
function playGame(playerSelection) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent;
            computerSelection = getComputerChoice();

            if (
                (playerSelection === rock && computerSelection === rock) ||
                (playerSelection === paper && computerSelection === paper) ||
                (playerSelection === scissors && computerSelection === scissors)
            ) {
                roundResult = "Round is a draw!";
            } else if (
                (playerSelection === rock && computerSelection === paper) ||
                (playerSelection === paper && computerSelection === scissors) ||
                (playerSelection === scissors && computerSelection === rock)
            ) {

                compWinCount++
                roundResult = "Computer wins this round";

            } else if (
                (playerSelection === paper && computerSelection === rock) ||
                (playerSelection === scissors && computerSelection === paper) ||
                (playerSelection === rock && computerSelection === scissors)
            ) {

                playerWinCount++;
                roundResult = "You won this round!";
            }


            throwResult(roundResult);

            if (playerWinCount === 5) {
                if (confirm('You WON the game! Want to play again?') === true) {
                    restartGame();
                } else {
                    disableButtons();
                }
            } else if (compWinCount === 5) {
                disableButtons();
                if (confirm('You LOSE... Want to play again?') === true) {
                    restartGame();
                } else {
                    disableButtons();
                }
            }
        });
    });
}

//printing the round result into the page
function throwResult(result) {

    const pResult = document.getElementById('result');
    pResult.textContent = result;

    const pWins = document.getElementById('playerWins');
    pWins.textContent = `Player wins: ${playerWinCount}`;

    const cWins = document.getElementById('computerWins');
    cWins.textContent = `Computer wins: ${compWinCount}`
}

//disabling the buttons 
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

//reloading of page
function restartGame() {
    window.location.reload();
}
