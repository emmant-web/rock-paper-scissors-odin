//create a function getComputerChoice

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1){
        return "rock"
    }

    else if (choice === 2){
        return "paper"
    }

    else {
        return "scissors"
    }
}


//create a function getHumanChoice

function getHumanChoice(){
    let options = prompt("Get ready to battle! Rock, paper or scissors?").toLowerCase().trim();

    if (options === "rock"){
        return "rock";
    }

    else if (options === "paper"){
        return "paper";
    }

    else if (options === "scissors"){
        return "scissors"
    }

    else{
        alert("INVALID! please pick rock, paper or scissors");
    }
}



//create score variables for human score and computer score

humanScore = 0;
computerScore = 0;


//create a function named playRound

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human wins! Rock beats scissors!")
        humanScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins! Paper beats rock!")
        computerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human wins! Paper beats rock!")
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer wins! Scissors beats paper!")
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human wins! Scissors beats paper!")
        humanScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Computer wins! Rock beats scissors!")
        computerScore++;
    }

    else{
        console.log("Tie for both human and computer!")
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


//create a function named playGame
function playGame(){

//for loop to play 5 rounds
for (let i = 0; i < 5; i++){
    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore + " ||| Computer Score: " + computerScore);
}

//if human has a higher score console log human wins

if (humanScore > computerScore){
    console.log("HUMAN WINS!")
}

//if computer has a higher score console log computer wins

if (computerScore > humanScore){
    console.log("COMPUTER WINS!")
}

}

playGame();




