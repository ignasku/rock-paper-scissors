let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let roundResult;

    if (playerSelection == computerSelection) {
        roundResult = "TIE";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "COMPUTER WINS";
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "PLAYER WINS";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = " COMPUTER WINS";
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "PLAYER WINS";
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "COMPUTER WINS";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "PLAYER WINS";
        playerScore++;
    }
    return roundResult;
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
//var result = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));