let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

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
    results.textContent = "Results:"

    //if playerSelection is equal to paper
    if (playerSelection == "paper") {
        //and computerSelection is equal to rock -- win
        if (computerSelection == "rock") {
            results.textContent = "You Win! Paper beats Rock";
            ++playerScore;
            return results.textContent;
        }
        //and computerSelection is equal to scissors -- lose
        else if (computerSelection == "scissors") {
            results.textContent = "You Lose! Scissors beats Paper";
            ++computerScore;
            return results.textContent;

        }
        //and computerSelection is equal to paper -- tie
        else {
            results.textContent = "It's a tie! Paper is equal to Paper";
            ++computerScore;
            ++playerScore;
            return results.textContent;

        }
    } 
    //if playerSelection is equal to rock 
    else if (playerSelection == "rock") {
        //and computerSelection is equal to rock -- tie
        if (computerSelection == "rock") {
            results.textContent = "It's a tie! Rock is equal to Rock";
            ++computerScore;
            ++playerScore;
            return results.textContent;
        }
        //and computerSelection is equal to scissors -- win
        else if (computerSelection == "scissors") {
            results.textContent = "You Win! Rock beats Scissors";
            ++playerScore;
            return results.textContent;
        }
        //and computerSelection is equal to paper -- lose
        else {
            results.textContent = "You Lose! Paper beats Rock";
            ++computerScore;
            return results.textContent;
        }
    } 
    //if playerSelection is equal to scissors
    else if (playerSelection == "scissors") { 
        //and computerSelection is equal to rock -- lose
        if (computerSelection == "rock") {
            results.textContent = "You Lose! Rock beats Scissors";
            ++computerScore;
            return results.textContent;
        }
        //and computerSelection is equal to scissors -- tie
        else if (computerSelection == "scissors") {
            results.textContent = "Its a tie! Scissors is equal to Scissors";
            ++computerScore;
            ++playerScore;
            return results.textContent;
        }
        //and computerSelection is equal to paper -- win
        else {
            results.textContent = "You Win! Scissors beats Paper";
            ++playerScore;
            return results.textContent;
        }
    } 
    //else: player has entered invalid value
    else {
        results.textContent = "You have entered an invalid value!"
        return results.textContent;
    }
}

function runRounds(e) {

    if (playerScore !== 5 || computerScore !== 5) {
        results.textContent = playRound(e.composedPath()[0].id, computerPlay());
        console.log(playerScore);
        console.log(computerScore);

        if (playerScore === 5 || computerScore === 5) {
            game();
        }
    }
}


function game () {

    //compare playerScore and computerScore; output winner and score
    if (playerScore === 5) {
        //buttons.removeEventListener();
        results.textContent = `Your Score: ${playerScore} 
                Computer's Score: ${computerScore}`;
        results.textContent += "\n You Win!";
    }
    else if (computerScore === 5) {
        //buttons.removeEventListener();
        results.textContent = `Your Score: ${playerScore}
                Computer's Score: ${computerScore}`;
        results.textContent += "\n You Lose!";
    }

    //reset playerScore var; increment in playRound()
    playerScore = 0;
    //reset computerScore var; increment in playRound()
    computerScore = 0;
    
}

