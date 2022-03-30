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
        console.log("You LOSE! Paper beats Rock")
        return 0
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You WIN! Paper beats Rock")
        return 1
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You WIN! Rock beats Scissors")
        return 1
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You LOSE! Rock beats Scissors")
        return 0
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You LOSE! Scissors beats Paper")
        return 0
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You WIN! Scissors beats Paper")
        return 1
    }
    else if (playerSelection === computerSelection) {
        console.log("It's a TIE!")
        return 2
    }
    else {
        console.log("Error.")
        return 2
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors:")
        let computerSelection = computerPlay()
        let outcome = playRound(playerSelection, computerSelection)
        if (outcome == 0) {
            computerScore++
        }
        else if (outcome == 1) {
            playerScore++
        }
    }
    if (playerScore > computerScore) {
        return "You WIN! With a score: " + playerScore + " to " + computerScore
    }
    else if (computerScore > playerScore) {
        return "You LOSE! With a score: " + playerScore + " to " + computerScore
    }
    else {
        return "TIE! With a score: " + playerScore + " to " + computerScore
    }
}

game()

/*
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("You chose " + playerSelection + " and the computer chose " + computerSelection)
console.log(playRound(playerSelection, computerSelection))*/