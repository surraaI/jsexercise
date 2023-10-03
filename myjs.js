function getComputerChoice() {
    arr = ["rock", "scissor", "paper"]
    return arr[(Math.floor(Math.random() * arr.length))]

}
arr = ["rock", "scissor", "paper"]
let count = 0;
let mark = 0
let div = document.getElementsByTagName('div');
let i = 0;
let playerWins = 0;
let computerWins = 0;
let totalPlays = 0;



function playround(playerSelection) {



    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    if (!arr.includes(playerSelection)) { alert(`wrong input`) }
    if (arr.includes(playerSelection)) {
        if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissor`) || (playerSelection === `scissor` && computerSelection === `rock`)) {
            div[i].innerHTML = `you lose the computer chose ${computerSelection} you chose ${playerSelection}`;
            computerWins++;
            i += 1
            totalPlays++;
        } else if (playerSelection === computerSelection) {
            div[i].innerHTML = `draw`;
            i += 1
            totalPlays++;
        } else {
            div[i].innerHTML = `you win the computer chose ${computerSelection} you chose ${playerSelection}`;
            playerWins++
            i += 1
            totalPlays++;
        }
    }
    five();
}

function five() {
    if (totalPlays === 5) alert(`you win: ${playerWins} times.` + `\ncomputer wins: ${computerWins}`)

}



const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');

paper.onclick = function() {
    playround('paper');


};
scissor.onclick = function() {
    playround('scissor');

};
stone.onclick = function() {
    playround('rock');

};