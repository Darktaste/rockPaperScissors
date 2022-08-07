function getComputerChoice() {
    const possibleWords = [rock, paper, scissors];

    return possibleWords[Math.floor(Math.random() * possibleWords.length)];;
}

function playRound(playerSelection, computerSelection) {

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent;
            computerSelection = getComputerChoice();
            console.log(playerSelection);
            console.log(computerSelection);

            if (
                (playerSelection === rock && computerSelection === rock) ||
                (playerSelection === paper && computerSelection === paper) ||
                (playerSelection === scissors && computerSelection === scissors)
            ) {
                
                result = "Round is a draw!";
                console.log("Round is a draw!");
                
            } else if (
                (playerSelection === rock && computerSelection === paper) ||
                (playerSelection === paper && computerSelection === scissors) ||
                (playerSelection === scissors && computerSelection === rock)
            ) {
                compWinCount++
                result = "You won this round!";
                console.log("You won this round!");
                alert('WIN');
            } else if (
                (playerSelection === paper && computerSelection === rock) ||
                (playerSelection === scissors && computerSelection === paper) ||
                (playerSelection === rock && computerSelection === scissors)
            ) {
                playerWinCount++;
                result = "Computer winds this round";
                console.log("Computer winds this round");
            }
        });
    });
}


function game() {
    playRound();
    if(playerWinCount === 5 && compWinCount < playerWinCount) {
        result = "Congratz, you WIN the mage!";
        
    } else if(compWinCount === 5 && playerWinCount < compWinCount) {
        result = "You lose the game!";
    }
}

function throwResult(result){

    const throwResult = document.querySelector('#result');
    const pResult = document.createElement('p');
    pResult.textContent = result;
    throwResult.appendChild(pResult);
}

const buttons = document.querySelectorAll('button');
let isPlayer = false;
let isComputer = false;
let isDraw = false;
let compWinCount = 0;
let playerWinCount = 0;
let result = "";
const rock = '🪨';
const paper = '📜';
const scissors = '✂';



