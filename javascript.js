//function definitions

//computer picks rock, paper, or scissors randomly
function computerPlay() {
    let options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random()*options.length)];
}

//function takes player and computer input and displays winner
function playRound(playerSelection, computerSelection) {

    const results = document.querySelector('.results');
    results.textContent = "Results:"

    //if playerSelection is equal to paper
    if (playerSelection == "paper") {
        //and computerSelection is equal to rock -- win
        if (computerSelection == "rock") {
            results.textContent = "You Win! Paper beats Rock";
            playerScore++;
        }
        //and computerSelection is equal to scissors -- lose
        else if (computerSelection == "scissors") {
            results.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }
        //and computerSelection is equal to paper -- tie
        else {
            results.textContent = "It's a tie! Paper is equal to Paper";
            computerScore++;
            playerScore++;
        }
    } 
    //if playerSelection is equal to rock 
    else if (playerSelection == "rock") {
        //and computerSelection is equal to rock -- tie
        if (computerSelection == "rock") {
            results.textContent = "It's a tie! Rock is equal to Rock";
            computerScore++;
            playerScore++;
        }
        //and computerSelection is equal to scissors -- win
        else if (computerSelection == "scissors") {
            results.textContent = "You Win! Rock beats Scissors";
            playerScore++;
        }
        //and computerSelection is equal to paper -- lose
        else {
            results.textContent = "You Lose! Paper beats Rock";
            computerScore++;
        }
    } 
    //if playerSelection is equal to scissors
    else if (playerSelection == "scissors") { 
        //and computerSelection is equal to rock -- lose
        if (computerSelection == "rock") {
            results.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        }
        //and computerSelection is equal to scissors -- tie
        else if (computerSelection == "scissors") {
            results.textContent = "Its a tie! Scissors is equal to Scissors";
            computerScore++;
            playerScore++;
        }
        //and computerSelection is equal to paper -- win
        else {
            results.textContent = "You Win! Scissors beats Paper";
            playerScore++;
        }
    } 
    //else: player has entered invalid value
    else {
        results.textContent = "You have entered an invalid value!"
    }
}

//gets user selections and plays Round
function runRound(e) {
    playerSelection = e.composedPath()[0].id; //location of id name
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function game () {
    //assign playerScore var; increment in playRound()
    playerScore = 0;
    //assign computerScore var; increment in playRound()
    computerScore = 0;

    const results = document.querySelector('.results');
    results.textContent = "Results:"

    //options section
    const options = document.querySelector('.options');

    const rock = document.createElement('button');
    rock.setAttribute('id','rock');
    rock.textContent = "Rock";
    options.appendChild(rock);

    const paper = document.createElement('button');
    paper.setAttribute('id','paper');
    paper.textContent = "Paper";
    options.appendChild(paper);

    const scissors = document.createElement('button');
    scissors.setAttribute('id','scissors');
    scissors.textContent = "Scissors";
    options.appendChild(scissors);

    const buttons = options.querySelectorAll('button');
    buttons.forEach(node => addEventListener('click', runRound));


    results.textContent = `Your Score: ${playerScore}`;
    results.textContent = `Computer's Score: ${computerScore}`;

    //compare playerScore and computerScore; output winner and score
    if (playerScore >= 5) {
        results.textContent = "You Win!";
    }
    else if (computerScore >= 5) {
        results.textContent = "You Lose!";
    }
    else {
        results.textContent = "Its a Tie!";
    }
    
}

let playerScore;
let computerScore;
let playerSelection;
let computerSelection;

window.addEventListener('click', game());