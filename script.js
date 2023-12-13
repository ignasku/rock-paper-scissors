const rounds = document.querySelectorAll(".round");
const resultDiv = document.getElementById("result");
const playAgainButton = document.getElementById("playAgain");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  const computerChoice = computerPlay();
  const result = getResult(playerChoice, computerChoice);

  updateUI(result);
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

function updateUI(result) {
  rounds[roundCount].style.backgroundColor =
    result === "win" ? "green" : result === "lose" ? "red" : "gray";
  roundCount++;

  if (roundCount === 5) {
    displayResult();
  }
}

function displayResult() {
  let finalResult;
  if (playerScore > computerScore) {
    finalResult = "You won!";
  } else if (playerScore < computerScore) {
    finalResult = "You lost!";
  } else {
    finalResult = "It's a tie!";
  }

  resultDiv.textContent = finalResult;
  playAgainButton.style.display = "block";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;

  rounds.forEach((round) => {
    round.style.backgroundColor = "lightgray";
  });

  resultDiv.textContent = "";
  playAgainButton.style.display = "none";
}
