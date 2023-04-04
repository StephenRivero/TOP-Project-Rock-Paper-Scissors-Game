function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0){
        return 'rock'
    } else if (computerChoice == 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getPlayerChoice() {
  let playerChoice = prompt('Please type Rock, Paper, or Scissors')
    if (playerChoice.toLowerCase() == 'rock'){
      return 'rock'
    } else if (playerChoice.toLowerCase() == 'paper'){
      return 'paper'
    } else if (playerChoice.toLowerCase() == 'scissors'){
      return 'scissors'
    }
}

// function getPlayerChoice() {
//     let playerChoice = '';
//     while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
//       playerChoice = prompt('Please choose Rock, Paper, or Scissors:');
//     }
//     return playerChoice;
// }


function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'paper' && playerSelection == 'rock'){
        return "You lose! Paper beats Rock."
    } else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        return "You win! Rock beats Scissors."
    } else if (computerSelection == 'rock' && playerSelection == 'paper'){
        return "You win! Paper beats Rock."
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        return "You lose! Scissors beats Paper."
    } else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        return "You lose! Rock beats Scissors."
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        return "You win! Scissors beats Paper."
    } 
    else {
        return "It's a tie!"
    }
  }
   
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`You won the game! Final score: ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lost the game! Final score: ${playerScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
  }
}

game();


  



