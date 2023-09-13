function getComputerChoice() {
    arr = ["rock", "scissor", "paper"]
    return arr[(Math.floor(Math.random() * arr.length))]

}


function Game(playerSelection, computerSelection) {
    playerSelection = prompt(`paper,scissor, rock: `)
    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    if ((playerSelection === `rock` && computerSelection === `paper`) || (playerSelection === `paper` && computerSelection === `scissor`) || (playerSelection === `scissor` && computerSelection === `rock`)) { alert(`you lose the computer chose ${computerSelection}`) } else { alert(`you win the computer chose${computerSelection}`) }


}
Game()