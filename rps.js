
let playerScore = 0
let computerScore = 0

function playRound(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const num = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[num];

    let result = '';
    if (playerChoice === computerChoice) {
        result = 'It\'s a draw!';
        alert("its a tie")
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('result').textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}