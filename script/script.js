//declaring constants and variables
const buttons = document.querySelectorAll('.playerButton');
const div = document.querySelector('div');
const popup = document.getElementById('popup');
const pResult = document.getElementById('result');
const pWins = document.getElementById('playerWins');
const cWins = document.getElementById('computerWins');
const closeButton = document.querySelector('.closeButton');
const popupResult = popup.querySelector('.popupResult');
const img = document.querySelector('img');
const rock = '🪨';
const paper = '📜';
const scissors = '✂';
let compWinCount = 0;
let playerWinCount = 0;
let roundResult = "";
let gameResult = "";
let playerSelection = "";


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

                compWinCount++;
                roundResult = "Computer wins this round!";

            } else if (
                (playerSelection === paper && computerSelection === rock) ||
                (playerSelection === scissors && computerSelection === paper) ||
                (playerSelection === rock && computerSelection === scissors)
            ) {

                playerWinCount++;
                roundResult = "You won this round!";

            }

            throwResult(roundResult);

            if (playerWinCount === 5 || compWinCount === 5) {

                openPopup();
                disableButtons()
            }
        });
    });
}

//printing the round result into the page
function throwResult(result) {
    pResult.textContent = result;
    pWins.textContent = `Player wins: ${playerWinCount}`;
    cWins.textContent = `Computer wins: ${compWinCount}`
}

//disabling the buttons 
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

//opening modal when game is over
function openPopup() {
    popup.classList.add('open-popup')

    if (playerWinCount === 5) {
        popupResult.textContent = "Congratz! You won the game!";
        img.src = './img/check.png';
    } else if (compWinCount === 5) {
        popupResult.textContent = "Sorry! You lost the game!"
        img.src = './img/cross.png';
    }
    restartGame();
}

//game restart
function restartGame() {

    closeButton.addEventListener('click', () => {
        popup.classList.remove('open-popup')
        compWinCount = 0;
        playerWinCount = 0;
        roundResult = "";
        gameResult = "";
        playerSelection = "";

        buttons.forEach(button => {
            button.disabled = false;
        })
        throwResult();
    });
}
