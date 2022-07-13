//function definitions

//computer picks rock, paper, or scissors randomly
function computerPlay() {
    let options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random()*options.length)];
}

//function takes player and computer input and displays winner
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    //if playerSelection is equal to paper
    if (playerSelection == "paper") {
        //and computerSelection is equal to rock -- win
        if (computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
            playerScore++;
        }
        //and computerSelection is equal to scissors -- lose
        else if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
        //and computerSelection is equal to paper -- tie
        else {
            console.log("It's a tie! Paper is equal to Paper");
            computerScore++;
            playerScore++;
        }
    } 
    //if playerSelection is equal to rock 
    else if (playerSelection == "rock") {
        //and computerSelection is equal to rock -- tie
        if (computerSelection == "rock") {
            console.log("It's a tie! Rock is equal to Rock");
            computerScore++;
            playerScore++;
        }
        //and computerSelection is equal to scissors -- win
        else if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
            playerScore++;
        }
        //and computerSelection is equal to paper -- lose
        else {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }
    } 
    //if playerSelection is equal to scissors
    else if (playerSelection == "scissors") { 
        //and computerSelection is equal to rock -- lose
        if (computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
        //and computerSelection is equal to scissors -- tie
        else if (computerSelection == "scissors") {
            console.log("Its a tie! Scissors is equal to Scissors");
            computerScore++;
            playerScore++;
        }
        //and computerSelection is equal to paper -- win
        else {
            console.log("You Win! Scissors beats Paper");
            playerScore++;
        }
    } 
    //else: player has entered invalid value
    else {
        console.log("You have entered an invalid value!")
    }
}

function game () {
    //assign playerScore var; increment in playRound()
    playerScore = 0;
    //assign computerScore var; increment in playRound()
    computerScore = 0;

    //loop 5 times for 5 round game
    for (let i = 0; i < 5; x++) {
        //assign playerSelection using prompt()
        playerSelection = prompt("Please enter Rock, Paper, or Scissors:", "");

        //assign computerSelection by calling computerPlay()
        computerSelection = computerPlay();

        //call playRound()
        console.log(playRound(playerSelection, computerSelection));
    }
    //end loop

    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer's Score: ${computerScore}`);

    //compare playerScore and computerScore; output winner and score
    if (playerScore > computerScore) {
        console.log("You Win!");
    }
    else if (computerScore < playerScore) {
        console.log("You Lose");
    }
    else {
        console.log("You Tied");
    }
    
}

let playerScore;
let computerScore;
let playerSelection;
let computerSelection;