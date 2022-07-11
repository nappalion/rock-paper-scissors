function computerPlay() {
    let pick = Math.floor(Math.random()*3);

    if (pick === 0) {
        pitouFrame.src = choiceIcon('rock');
        return "rock";
    }
    else if (pick === 1) {
        pitouFrame.src = choiceIcon('paper');
        return "paper";
    }
    else {
        pitouFrame.src = choiceIcon('scissors');
        return "scissors";
    }
}

function pitouHit() {
    pitou.src = 'assets/images/pitou-animations/pitou-hit.gif';
    background.classList.add('shake');
    setTimeout(function() {
        pitou.src = 'assets/images/pitou-animations/pitou-idle.gif';
        background.classList.remove('shake');
    }, 800);
}

function pitouAttack() {
    pitou.src = 'assets/images/pitou-animations/pitou-attack.gif';
    setTimeout(function() {
        pitou.src = 'assets/images/pitou-animations/pitou-idle.gif';
    }, 1300);
}

function gonRock() {
    gon.src = 'assets/images/gon-animations/gon-rock.gif';
    rockAudio.play();
    setTimeout(function() {
        gon.src = 'assets/images/gon-animations/gon-idle.gif';
    }, 1500);
}

function gonPaper() {
    gon.src = 'assets/images/gon-animations/gon-paper.gif'
    paperAudio.play();
    setTimeout(function() {
        gon.src = 'assets/images/gon-animations/gon-idle.gif';
    }, 1400);
}

function gonScissors() {
    gon.src = 'assets/images/gon-animations/gon-scissors.gif'
    scissorsAudio.play();
    setTimeout(function() {
        gon.src = 'assets/images/gon-animations/gon-idle.gif';
    }, 950);
}

function gonHit() {
    setTimeout(function() {
        gon.src = 'assets/images/gon-animations/gon-hit.gif'
        background.classList.add('shake');
        setTimeout(function() {
            gon.src = 'assets/images/gon-animations/gon-idle.gif';
            background.classList.remove('shake');
        }, 850);
    }, 1000);
}

function playRound(playerSelection = '', computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    gonFrame.src = choiceIcon(playerSelection, true);

    if (playerSelection === "rock" && computerSelection === "paper") {
        pitouAttack();
        hitAudio.play();
        gonHit();
        console.log("You LOSE! Paper beats Rock \n");
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        pitouHit();
        animePunchAudio.play();
        setTimeout(function() { nyaAudio.play(); }, 1000);
        console.log("You WIN! Paper beats Rock \n");
        return 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        pitouHit();
        animePunchAudio.play();
        setTimeout(function() { nyaAudio.play(); }, 1000);
        console.log("You WIN! Rock beats Scissors \n");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        pitouAttack();
        hitAudio.play();
        gonHit();
        console.log("You LOSE! Rock beats Scissors \n");
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        pitouAttack();
        hitAudio.play();
        gonHit();
        console.log("You LOSE! Scissors beats Paper \n");
        return 0;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        pitouHit();
        animePunchAudio.play();
        setTimeout(function() { nyaAudio.play(); }, 1000);
        console.log("You WIN! Scissors beats Paper \n");
        return 1;
    }
    else if (playerSelection === computerSelection) {
        console.log("It's a TIE! \n");
        return 2;
    }
    else {
        //outcomeDiv.textContent += "Error. \n";
        return 2;
    }
}


function choiceIcon(selection, isGon = false) {
    switch(selection) {
        case 'rock': 
            if (isGon) gonRock();
            return 'assets/images/etc/rock-icon.png';
        case 'paper': 
            if (isGon) gonPaper();
            return 'assets/images/etc/paper-icon.png';
        case 'scissors': 
            if (isGon) gonScissors();
            return 'assets/images/etc/scissors-icon.png';
        default:
            return 'error';
    }
}



function playGame(playerSelection) {
    let computerSelection = computerPlay();
    let outcome = playRound(playerSelection, computerSelection);
    

    if (outcome == 0) {
        computerScore++;
        gonHealthNum -= gonHealthMax / maxScore;
        gonHealth.style.width = gonHealthNum.toString() + 'px';
    }
    else if (outcome == 1) {
        playerScore++;
        pitouHealthNum -= pitouHealthMax / maxScore;
        pitouHealth.style.width = pitouHealthNum.toString() + 'px';
    }

    if (playerScore >= maxScore) {
        setTimeout(function() { pitou.src = 'assets/images/pitou-animations/pitou-dead.gif'; }, 1000);
        popupText.textContent = "VICTORY";
        popup.style.visibility = "visible";
        
    } else if (computerScore >= maxScore) {
        popupText.textContent = "DEFEAT";
        popup.style.visibility = "visible";
    }
    

    return "Score: " + playerScore + " to " + computerScore;
}

function fadeIn() {
    var fade = document.querySelector(".game");
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.15
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID); // clears the interval
        }
    }, 100);
}

window.onload = fadeIn;

const maxScore = 5;

let rockAudio = new Audio('assets/sounds/rock-sound.mp3');
let paperAudio = new Audio('assets/sounds/paper-sound.mp3');
let scissorsAudio = new Audio('assets/sounds/scissors-sound.mp3');
let hitAudio = new Audio('assets/sounds/hit-sound.mp3');
let nyaAudio = new Audio('assets/sounds/nya-sound.mp3');
let animePunchAudio = new Audio('assets/sounds/anime-punch-sound.mp3');
let battleThemeAudio = new Audio('assets/sounds/battle-theme.mp3');

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let audioIsPaused = false;

const gon = document.querySelector('.gon-sprite');
const gonFrame = document.querySelector('.gon-frame');
const gonHealth = document.querySelector('.gon-health');
const pitou = document.querySelector('.pitou-sprite');
const pitouFrame = document.querySelector('.pitou-frame');
const pitouHealth = document.querySelector('.pitou-health');

const playerButtons = document.querySelectorAll('.choice');
const playerChoiceButtons = document.querySelector('.player-choice');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup-text');
const popupButton = document.querySelector('.popup-button');
const background = document.querySelector('.background');
const audioToggle = document.querySelector('.audio-toggle');
const audioIcon = document.querySelector('.audio-icon');

const gonHealthMax = parseInt(gonHealth.clientWidth, 10);
const pitouHealthMax = parseInt(pitouHealth.clientWidth, 10);
let gonHealthNum = gonHealthMax;
let pitouHealthNum = pitouHealthMax;

battleThemeAudio.loop = true;
battleThemeAudio.volume = 0.2;
document.body.addEventListener("click", function () { battleThemeAudio.play(); });

popupButton.addEventListener('click', () => { location.reload(); } );

audioToggle.addEventListener('click', () => {
    if (!audioIsPaused) {
        audioIsPaused = true;
        battleThemeAudio.volume = 0;
        audioIcon.src = "assets/images/etc/volume-mute-fill.png";
    } else {
        audioIsPaused = false;
        battleThemeAudio.volume = 0.2;
        audioIcon.src = "assets/images/etc/volume-up-fill.png";
    }
});

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {

        playerButtons.forEach((button) => { 
            button.disabled = true;
            button.style.cursor = 'not-allowed'; 
        })

        if (button.classList.contains('rock')) {
            playerSelection = 'rock';
        } else if (button.classList.contains('paper')) {
            playerSelection = 'paper';
        } else if (button.classList.contains('scissors')) {
            playerSelection = 'scissors';
        }

        playGame(playerSelection);

        setTimeout(function() {
            playerButtons.forEach((button) => { 
                if (playerScore < maxScore && computerScore < maxScore) {
                    button.disabled = false;
                    button.style.cursor = 'grab'; 
                }
            })}, 2500);
    });
});