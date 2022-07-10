function computerPlay() {
    let pick = Math.floor(Math.random()*3);
    if (pick === 0) {
        return "rock";
    }
    else if (pick === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection = '', computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        //outcomeDiv.textContent += "You LOSE! Paper beats Rock \n";
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        //outcomeDiv.textContent += "You WIN! Paper beats Rock \n";
        return 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        //outcomeDiv.textContent += "You WIN! Rock beats Scissors \n";
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        //textContent += "You LOSE! Rock beats Scissors \n";
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        //outcomeDiv.textContent += "You LOSE! Scissors beats Paper \n";
        return 0;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        //outcomeDiv.textContent += "You WIN! Scissors beats Paper \n";
        return 1;
    }
    else if (playerSelection === computerSelection) {
        //outcomeDiv.textContent += "It's a TIE! \n";
        return 2;
    }
    else {
        //outcomeDiv.textContent += "Error. \n";
        return 2;
    }
}

function playGame(playerSelection) {
    let computerSelection = computerPlay();
    let outcome = playRound(playerSelection, computerSelection);

    if (outcome == 0) {
        computerScore++;
    }
    else if (outcome == 1) {
        playerScore++;
    }

    if (playerScore == 5) {
        endDiv.textContent += "You WIN! The PC loses!";
    } else if (computerScore == 5) {
        endDiv.textContent += "You LOSE! The PC wins!";
    }
    

    return "Score: " + playerScore + " to " + computerScore;
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;

let gon = document.querySelector('.gon-sprite');
let pitou = document.querySelector('.pitou-sprite');
let playerButtons = document.querySelectorAll('.choice');
playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (button.classList.contains('rock')) {
            playerSelection = 'rock';
        } else if (button.classList.contains('paper')) {
            playerSelection = 'paper';
        } else if (button.classList.contains('scissors')) {
            playerSelection = 'scissors';
        }
        

    });
});




/*
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("You chose " + playerSelection + " and the computer chose " + computerSelection)
console.log(playRound(playerSelection, computerSelection))*/