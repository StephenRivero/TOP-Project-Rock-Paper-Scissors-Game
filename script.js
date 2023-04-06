function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        return "Rock".toLowerCase()
    } else if (randomNumber == 1){
        return "Paper".toLowerCase()
    } else {
        return "Scissors".toLowerCase()
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "paper" && playerSelection == "rock"){
        return "Computer wins! Paper beats rock"
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        return "Player wins! Rock beats scissors"
    } else {
        return "It's a Tie!"
    }
  }
   
  let playerSelection;
  const computerSelection = getComputerChoice();


  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Round " + (i+1) + ": Choose rock, paper, or scissors").trim().toLowerCase();
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
      if (result.startsWith("Player wins")) {
        playerScore++;
      } else if (result.startsWith("Computer wins")) {
        computerScore++;
      }
    }
    console.log("Final score: Player " + playerScore + " - " + computerScore + " Computer");
    if (playerScore > computerScore) {
      console.log("Player wins the game!");
    } else if (computerScore > playerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();