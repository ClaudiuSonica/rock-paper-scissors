
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "It's a tie") {
    return "It's a tie";
  } else if (result == "Player") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;

  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }

  console.log(
    `Game over! You have ${scorePlayer} and computer has ${scoreComputer}!`
  )

  if (scorePlayer > scoreComputer) {
    console.log("You win!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer won!");
  } else {
    console.log("It's a tie!");
  }
}

game()
