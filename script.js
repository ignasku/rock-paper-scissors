let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

function finalResult(playerScore, computerScore){
    let finalResult = "";
    if(playerScore == computerScore){
        finalResult = "TIE!";
    }
    else if(playerScore > computerScore){
        finalResult = "YOU WIN!";
    }
    else{
        finalResult = "YOU LOSE!";
    }
    return finalResult;
}




function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "tie";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"){
        return "playerWins";
    }
    else{
        return "computerWins";
    }
}

function startGame(playerSelection){
    if(roundNumber == 5){
        roundNumber = 1;
        playerScore = 0;
        computerScore = 0;

        finalEndResult.textContent = "";
    }
    else{
        roundNumber++;
    }

    currentRound.textContent = `Round ${roundNumber}`;

    let computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);

    if(result == "tie"){
        playerNewScore.textContent = playerScore;
        computerNewScore.textContent = computerScore;
        roundResult.textContent = "TIE!";
    }
    else if(result == "playerWins"){
        playerScore++;
        playerNewScore.textContent = playerScore;
        computerNewScore.textContent = computerScore;
        roundResult.textContent = "PLAYER WINS!"
    }
    else{
        computerScore++;
        playerNewScore.textContent = playerScore;
        computerNewScore.textContent = computerScore;
        roundResult.textContent = "COMPUTER WINS!"
    }

    if(roundNumber == 5){
        finalEndResult.textContent = finalResult(playerScore, computerScore);
    }
}




const roundResult = document.querySelector('#round-result');
const playerNewScore = document.querySelector('#player-score');
const computerNewScore = document.querySelector('#computer-score');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const currentRound = document.querySelector('#round-number');
const finalEndResult = document.querySelector('#final-result')

rockButton.addEventListener("click", () =>{
    startGame("rock");
})

paperButton.addEventListener("click", () =>{
    startGame("paper");
})
scissorsButton.addEventListener("click", () =>{
    startGame("scissors");
})