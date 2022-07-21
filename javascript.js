let playerScore = 0;
let computerScore = 0;

const results1 = document.querySelector('.results1');
results1.textContent = "Results:";

const results2 = document.querySelector('.results2');
results2.textContent = "";

const results3 = document.querySelector('.results3');
results3.textContent = "";

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
buttons.forEach(() => addEventListener('click', runRounds));

window.addEventListener('click', game());

//function definitions

//computer picks rock, paper, or scissors randomly
function computerPlay() {
    let options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random()*options.length)];
}

//function takes player and computer input and displays winner
function playRound(playerSelection, computerSelection) {

    const results = document.querySelector('.results');
    results1.textContent = "Results:";

    results2.textContent = "";
    results3.textContent = "";

    //if playerSelection is equal to paper
    if (playerSelection == "paper") {
        //and computerSelection is equal to rock -- win
        if (computerSelection == "rock") {
            results1.textContent = "You Win! Paper beats Rock";
            ++playerScore;
            return results1.textContent;
        }
        //and computerSelection is equal to scissors -- lose
        else if (computerSelection == "scissors") {
            results1.textContent = "You Lose! Scissors beats Paper";
            ++computerScore;
            return results1.textContent;

        }
        //and computerSelection is equal to paper -- tie
        else {
            results1.textContent = "It's a tie! Paper is equal to Paper";
            ++computerScore;
            ++playerScore;
            return results1.textContent;

        }
    } 
    //if playerSelection is equal to rock 
    else if (playerSelection == "rock") {
        //and computerSelection is equal to rock -- tie
        if (computerSelection == "rock") {
            results1.textContent = "It's a tie! Rock is equal to Rock";
            ++computerScore;
            ++playerScore;
            return results1.textContent;
        }
        //and computerSelection is equal to scissors -- win
        else if (computerSelection == "scissors") {
            results1.textContent = "You Win! Rock beats Scissors";
            ++playerScore;
            return results1.textContent;
        }
        //and computerSelection is equal to paper -- lose
        else {
            results1.textContent = "You Lose! Paper beats Rock";
            ++computerScore;
            return results1.textContent;
        }
    } 
    //if playerSelection is equal to scissors
    else if (playerSelection == "scissors") { 
        //and computerSelection is equal to rock -- lose
        if (computerSelection == "rock") {
            results1.textContent = "You Lose! Rock beats Scissors";
            ++computerScore;
            return results1.textContent;
        }
        //and computerSelection is equal to scissors -- tie
        else if (computerSelection == "scissors") {
            results1.textContent = "Its a tie! Scissors is equal to Scissors";
            ++computerScore;
            ++playerScore;
            return results1.textContent;
        }
        //and computerSelection is equal to paper -- win
        else {
            results1.textContent = "You Win! Scissors beats Paper";
            ++playerScore;
            return results1.textContent;
        }
    } 
}

function runRounds(e) {

    if (playerScore !== 5 || computerScore !== 5) {
        results1.textContent = playRound(e.composedPath()[0].id, computerPlay());
        console.log(playerScore);
        console.log(computerScore);

        if (playerScore === 5 || computerScore === 5) {
            game();
        }
    }
}


function game () {
    //compare playerScore and computerScore; output winner and score
    if (playerScore == 5 && computerScore == 5) {
        results1.textContent = `Your Score: ${playerScore}`; 
        results2.textContent = `Computer's Score: ${computerScore}`;
        results3.textContent = "It's a Tie!";
    }
    else if (playerScore === 5) {
        results1.textContent = `Your Score: ${playerScore}`; 
        results2.textContent = `Computer's Score: ${computerScore}`;
        results3.textContent = "You Win!";
    }
    else if (computerScore === 5) {
        results1.textContent = `Your Score: ${playerScore}`;
        results2.textContent = `Computer's Score: ${computerScore}`;
        results3.textContent = "You Lose!";
    }

    //reset playerScore var; increment in playRound()
    playerScore = 0;
    //reset computerScore var; increment in playRound()
    computerScore = 0;
}

