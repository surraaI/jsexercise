function getComputerChoice() {
    arr = ["rock", "scissor", "paper"]
    return arr[(Math.floor(Math.random() * arr.length))]

}
arr = ["rock", "scissor", "paper"]

function playround(playerSelection, computerSelection) {
    playerSelection = prompt(`paper,scissor, rock: `)
    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    if (!arr.includes(playerSelection)) { alert(`wrong input`) }
    if (arr.includes(playerSelection)) {
        if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissor`) || (playerSelection === `scissor` && computerSelection === `rock`)) { return `you lose the computer chose ${computerSelection} you chose ${playerSelection}` } else if (playerSelection === computerSelection) { return `draw` } else { return `you win the computer chose ${computerSelection} you chose ${playerSelection}` }
    }

}

console.log(playround())
console.log(playround())
console.log(playround())
console.log(playround())
console.log(playround())