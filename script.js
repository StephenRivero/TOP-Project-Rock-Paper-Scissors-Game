function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
        if (computerChoice == 0){
            return 'Rock'
        } else if (computerChoice == 1){
            return 'Paper'
        } else {
            return 'Scissors'
        }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Paper' && playerSelection){
        return "You lose! Paper beats Rock."
    } else if (computerSelection == 'Scissors' && playerSelection){
        return "You win! Rock beats Scissors."
    } else {
        return "It's a tie!"
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  
  console.log(playRound(playerSelection, computerSelection));
  



