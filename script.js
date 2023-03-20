let rounds = 0;
let playerWins = 0;
let computerWins = 0;
let tie = 0;

const instructions = document.createElement('p');
instructions.textContent = 'The game ends after 5 rounds. Play Rock, Paper, or Scissors.';
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock'
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper'
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors'
const div = document.createElement('div');

const body = document.querySelector('body');
body.appendChild(instructions);
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(div);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getComputerChoice);
});

function getComputerChoice(e) {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = '';
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    playRound(e, computerSelection);
}

function playRound(e, computerSelection) {   
    let playerSelection = e.target.innerText;
    let result = '';
    const paragraphForSelections = document.createElement('p');
    paragraphForSelections.textContent = `Player played ${playerSelection} and computer played ${computerSelection}.`;
    div.appendChild(paragraphForSelections); 

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerWins++;
        rounds++;
        result = 'You win';
    } else if ((playerSelection === 'RockK' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerWins++;
        rounds++;
        result = 'You lose';
    } else {
        tie++;
        rounds++;
        result = 'Tie';
    }
    
    reason(result, playerSelection, computerSelection);
}

function reason(result, playerSelection, computerSelection) {
    let resultReason = '';
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        resultReason = 'Rock beats Scissors';
    } else if ((playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Rock' && computerSelection === 'Paper')) {
        resultReason = 'Paper beats Rock';
    } else if ((playerSelection === 'Scissors' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors')) {
        resultReason = 'Scissors beats Paper';
    } else {
        resultReason = 'Same hand';
    }
    const paragraphForResultAndReason = document.createElement('p');
    paragraphForResultAndReason.textContent = `${result}. ${resultReason}. Player won ${playerWins}, computer won ${computerWins}, and you tied ${tie}.`;
    div.appendChild(paragraphForResultAndReason);
    scoreboard();
}

function scoreboard() {
    let scoreboard = '';
    if (rounds === 5) {
        if (playerWins > computerWins) {
            scoreboard = 'Out of the 5 rounds, you win. '
        } else if (computerWins > playerWins) {
            scoreboard = 'Out of the 5 rounds, you lose. '
        } else {
            scoreboard = 'Out of the 5 rounds, you tie. '
        }
    } else {
        scoreboard = 'Keep playing. '
    }

    const paragraphForScoreboard = document.createElement('p');
    paragraphForScoreboard.textContent = `${scoreboard}`;
    div.appendChild(paragraphForScoreboard);
    return scoreboard;
}