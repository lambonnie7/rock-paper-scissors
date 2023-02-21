function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('The game ends after 5 rounds. Play Rock, Paper, or Scissors.');
        const computerSelection = getComputerChoice();
        
        function getComputerChoice() {
            let choice = ['Rock', 'Paper', 'Scissors'];
            return choice[Math.floor(Math.random() * choice.length)];
        }

        function playRound(playerSelection, computerSelection) {
            if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') || 
                (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') || 
                (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper')) {
                playerWins++;
                return 'You win. ';
            } else if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') || (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') || (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock')) {
                computerWins++;
                return 'You lose. ';
            } else {
                return 'Tie. ';
            }
        }
        
        function outcome() {
            if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') || 
                (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock')) {
                return 'Rock beats Scissors. ';
            } else if ((playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') || 
                (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper')) {
                return 'Paper beats Rock. ';
            } else if ((playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') || 
                (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors')) {
                return 'Scissors beats Paper. ';
            } else {
                return 'Same hand. ';
            }
        }

        function scoreboard() {
            if (i === 4) {
                if (playerWins > computerWins) {
                    return 'Out of the 5 rounds, you win. '
                } else if (computerWins > playerWins) {
                    return 'Out of the 5 rounds, you lose. '
                } else {
                    return 'Out of the 5 rounds, you tie. '
                }
            } else {
                return 'Keep playing. '
            }
        }

        console.log('The computer played ' + computerSelection);
        console.log(playRound(playerSelection, computerSelection) + outcome() + scoreboard());
        console.log('Player won ' + playerWins + ' and ' + 'computer won ' + computerWins)
    }
}

game();