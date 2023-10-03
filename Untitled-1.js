// Get the button elements
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const stoneButton = document.getElementById('stone');

// Get the div elements
const resultDivs = document.querySelectorAll('div');

// Add event listeners to the buttons
paperButton.addEventListener('click', () => playGame('paper'));
scissorButton.addEventListener('click', () => playGame('scissor'));
stoneButton.addEventListener('click', () => playGame('stone'));

// Variables to keep track of the game results
let playerWins = 0;
let computerWins = 0;
let totalPlays = 0;

// Function to play the game
function playGame(playerChoice) {
    // Generate a random choice for the computer opponent
    const choices = ['paper', 'scissor', 'stone'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Compare the choices and determine the winner or a tie
    let result;
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'stone' && computerChoice === 'scissor')
    ) {
        result = 'You win!';
        playerWins++;
    } else {
        result = 'You lose!';
        computerWins++;
    }

    // Display the game result in the div elements
    resultDivs.forEach(div => {
        div.textContent = result;
    });

    // Increase the play count
    totalPlays++;

    // Check if the player has played five times
    if (totalPlays === 5) {
        // Display the total result using an alert
        const totalResult = `Player wins: ${playerWins}\nComputer wins: ${computerWins}`;
        alert(totalResult);

        // Reset the game
        playerWins = 0;
        computerWins = 0;
        totalPlays = 0;
    }
}