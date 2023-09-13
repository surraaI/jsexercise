function getComputerChoice() {
    arr = ["rock", "scissor", "paper"]
    return arr[(Math.floor(Math.random() * arr.length))]

}


function Game(playerSelection, computerSelection) {
    const playerSelection = prompt(`paper,scissor, rock: `)
    playerSelection = playerSelection.toLowerCase()
    const computerSelection = getComputerChoice()
    if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissor`) || (playerSelection === `scissor` && computerSelection === `rock`)) { alert(`you lose the computer chose ${computerSelection}`) } else { alert(`you win the computer chose ${computerSelection}`) }


}
Game()
console.log(Game())
console.log(Game())
console.log(Game())
console.log(Game())
console.log(Game())