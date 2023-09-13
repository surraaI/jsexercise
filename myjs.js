function getComputerChoice() {
    arr = ["rock", "scissor", "paper"]
    return arr[(Math.floor(Math.random() * arr.length))]

}
console.log(getComputerChoice());

function Game(playerSelection, computerSelection) {
    playerSelection = prompt(`paper,scissor, rock: `)
    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissor`) || (playerSelection === `scissor` && computerSelection === `rock`)) { alert(`you lose`) } else { alert(`you win`) }


}
Game()