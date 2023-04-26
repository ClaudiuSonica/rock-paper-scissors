"use strict"

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let displayResult = "";


const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice().toLowerCase();
  playerSelection = prompt("Make your choice!");

  if (computerSelection == playerSelection) {
    return displayResult = "It's a tie!";
    roundWinner = "tie"
  } else if (
    computerSelection == "rock" && playerSelection == "scissors"
    || computerSelection == "paper" && playerSelection == "rock"
    || computerSelection == "scissors" && playerSelection == "paper"
  ) {
    computerScore = ++computerScore;
    if (computerScore === 1) {
      return displayResult = `You lost, ${computerSelection} beats ${playerScore}.`;
    } else if (computerScore === 2) {
      return displayResult = `You lost, ${computerSelection} beats ${playerScore}.`;
    } else if (computerScore === 3) {
      return displayResult = `You lost, ${computerSelection} beats ${playerSelection}.`;
    } else if (computerScore === 4) {
      return displayResult = `You lost, ${computerSelection} beats ${playerSelection}.`;
    } else {
      return displayResult = `Game over, ${computerSelection} beats ${playerSelection}, nice try`;
    }
  } else {
    playerScore = ++playerScore;
    if (playerScore === 1) {
      return displayResult = `You won, ${playerSelection} beats ${computerSelection}.`;
    } else if (playerScore === 2) {
      return displayResult = `You won, ${playerSelection} beats ${computerSelection}.`;
    } else if (playerScore === 3) {
      return displayResult = `You won, ${playerSelection} beats ${computerSelection}.`;
    } else if (playerScore === 4) {
      return displayResult = `You won, ${playerSelection} beats ${computerSelection}.`;
    } else {
      return displayResult = `Congratulations, ${playerSelection} beats ${computerSelection}, nice played`;
    }
  }
}

function finalScore(playerScore, computerScore) {
  if (computerScore > playerScore) { 
    return displayResult = `Computer wins, final score is: ${computerScore} to ${playerScore}.`;
  } else {
    return displayResult = `You win, final score is: ${playerScore} to ${computerScore}.`;
  }
}

playRound("rock", getComputerChoice());
playRound("paper", getComputerChoice());
playRound("rock", getComputerChoice());
playRound("scissors", getComputerChoice());
playRound("paper", getComputerChoice());

console.log(playRound());
console.log(finalScore(playerScore, computerScore));