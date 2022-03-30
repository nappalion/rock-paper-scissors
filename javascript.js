function computerPlay() {
    let pick = Math.floor(Math.random()*3+1)
    if (pick === 1) {
        return "rock"
    }
    else if (pick === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You LOSE! Paper beats Rock"
    }
    else if (playSelection === "paper" && computerSelection === "rock") {
        return "You WIN! Paper beats Rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You WIN! Rock beats Scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You LOSE! Rock beats Scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You LOSE! Scissors beats Paper"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You WIN! Scissors beats Paper"
    }
    else if (playerSelection === computerSelection) {
        return "It's a TIE!"
    }
    else {
        return "Error."
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))