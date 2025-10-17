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

let humanScore = 0;

let computerScore = 0;


function playRound(user, computer) {
    console.log(user, computer);
    if(user === computer){
        console.log(`Humans ${humanScore} Robots ${computerScore}`);
        console.log(`We have a draw, you both chose ${user.charAt(0).toUpperCase() + user.slice(1)}`);
    }
    else if(user === "rock" && computer == 'scissors' || user === "paper" && computer === "rock" || user === "scissors" && computer === "paper") {
        ++humanScore;
        console.log(`Humans ${humanScore} Robots ${computerScore}`);
            if (user === "scissors") {
            console.log(`You win! ${user.at(0).toUpperCase() + user.slice(1) + " " + "beat" + " " + computer.at(0).toUpperCase() + computer.slice(1)}`);
            }
            else {
            console.log(`You win! ${user.at(0).toUpperCase() + user.slice(1) + " " + "beats" + " " + computer.at(0).toUpperCase() + computer.slice(1)}`);
            }

    }
    else {
        ++computerScore;
        console.log(`Humans ${humanScore} Robots ${computerScore}`);
        if (computer === "scissors"){
            console.log(`You lose! ${computer.at(0).toUpperCase() + computer.slice(1) + " " + "beat" + " " + user.at(0).toUpperCase() + user.slice(1)}`)
        }
        else {
            console.log(`You lose! ${computer.at(0).toUpperCase() + computer.slice(1) + " " + "beats" + " " + user.at(0).toUpperCase() + user.slice(1)}`)
        }
    }
    

}

function playGame() {
    for(let i = 0; i <5; i++){
        const userChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You won! Final score is Humans" + " " + humanScore + " " + "Robots" + " " + computerScore);
    }
    else if(humanScore === computerScore) {
        console.log("Draw! Final score is Humans" + " " + humanScore + " " + "Robots" + " " + computerScore)
    }
    else {
        console.log("You lost! Final score is Humans" + " " + humanScore + " " + "Robots" + " " + computerScore)
    }
}

playGame();
