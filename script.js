function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Please enter your choice: rock, paper or scissors"
  );
  return humanChoice.toLowerCase();
}

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

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

console.log("Let's play a game!");
playGame();
