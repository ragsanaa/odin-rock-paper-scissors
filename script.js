function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

// function getHumanChoice() {
//   const humanChoice = prompt(
//     "Please enter your choice: rock, paper or scissors"
//   );
//   return humanChoice.toLowerCase();
// }

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const popUp = document.querySelector("#pop-up");

const humanChoiceImg = document.querySelector("#human-choice img");
const computerChoiceImg = document.querySelector("#computer-choice img");

const round = document.querySelector(".round");
const roundCount = document.querySelector("#round-count");
const message = document.querySelector(".message");
const playButton = document.querySelector(".play-btn");

const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");

var humanSelection = "";
var computerSelection = "";

rockButton.addEventListener("click", function () {
  humanSelection = "rock";
  humanChoiceImg.src = "assets/images/rock.png";
  popUp.style.visibility = "hidden";
  playGame();
});

paperButton.addEventListener("click", function () {
  humanSelection = "paper";
  humanChoiceImg.src = "assets/images/paper.png";
  popUp.style.visibility = "hidden";
  playGame();
});

scissorsButton.addEventListener("click", function () {
  humanSelection = "scissors";
  humanChoiceImg.src = "assets/images/scissors.png";
  popUp.style.visibility = "hidden";
  playGame();
});

let currentRound = 1;

function playGame() {
  if (currentRound <= roundCount.value) {
    round.textContent = `${currentRound}`;

    computerSelection = getComputerChoice();
    computerChoiceImg.src = `assets/images/${computerSelection}.png`;

    message.textContent = playRound(humanSelection, computerSelection);
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;

    currentRound++;

    if (currentRound <= roundCount.value) {
      setTimeout(() => {
        popUp.style.visibility = "visible";
      }, 3000); // Show pop-up after 3 seconds for the next round
    } else {
      setTimeout(() => {
        message.textContent = `Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
        currentRound = 1;
      }, 3000); // Show final score after 3 seconds
    }
  }
}

playButton.addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  currentRound = 1;
  message.textContent = "";
  popUp.style.visibility = "visible";
});
