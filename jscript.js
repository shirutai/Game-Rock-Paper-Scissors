function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * (4 - 1) + 1);
    if(randomNum == 1) {
        return "rock";
    }
    else if(randomNum === 2) {
        return "scissors";
    }
    else {
        return "paper";
    }
   }

   function getHumanChoice() {
    return humanText = prompt('Chose Rock, Paper or Scissors').toLowerCase();
}
