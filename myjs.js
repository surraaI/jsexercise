function getComputerChoice() {
    arr = ["rock", "scissor", "paper"]
    return arr[(Math.floor(Math.random() * arr.length))]

}
arr = ["rock", "scissor", "paper"]
let count = 0;
let mark = 0
let div = document.getElementsByTagName('div');
let i = 0;

function five() {
    if (count <= 4) { count += 1 } else if (count === 5) {

        if (mark > 0) {
            alert('you win')
        } else if (mark === 0) { alert(`you draw`) } else { alert(`you lose`) }


        for (j = 0; j < 5; j++) { div[j].innerHTML = '' }
        i = 0
        count = 0
    }

}


function playround(playerSelection) {



    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    if (!arr.includes(playerSelection)) { alert(`wrong input`) }
    if (arr.includes(playerSelection)) {
        if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissor`) || (playerSelection === `scissor` && computerSelection === `rock`)) {
            div[i].innerHTML = `you lose the computer chose ${computerSelection} you chose ${playerSelection}`;
            mark -= 1;
            i += 1
        } else if (playerSelection === computerSelection) {
            div[i].innerHTML = `draw`;
            i += 1
        } else {
            div[i].innerHTML = `you win the computer chose ${computerSelection} you chose ${playerSelection}`;
            mark += 1
            i += 1
        }
    }
    five();
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