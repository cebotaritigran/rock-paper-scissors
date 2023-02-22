/* 
    first we need to get user prompt
    then we need to create a function that will return computers random choice
    between rock paper and scissors, we could do that with
    random number generator. We can pass 3 numbers and ask to choose one of them
    and based on the choice give like 1 is rock, 2 is paper, then we need another function that will
    test who's the winner. but thats not the end, we need another function that will play out
    this game for 5 rounds or any spesific amount of rounds
*/

/*
    prompt user
    generate a random number out of 3 and get a computer choice through that
    compare user choice vs computer choice
    play the round 5 times with giving scores whoever wins
*/


let humanScore = 0;
let computerScore = 0;
let bestOfFive = 0;

function getHumanChoice(buttonChoice) {
    let humanChoice = buttonChoice;
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}


function getComputerChoice() {
    const rock = document.querySelector('#rockComputer');
    const paper = document.querySelector('#paperComputer');
    const scissors = document.querySelector('#scissorsComputer');
    rock.classList.remove('selected');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');
    let choiceNumber = 3;
    // this will get a number between 1-3 floor is used to get a number without decimals because
    // random returns a decimal number between 0-1 and we need to add + 1 so that we don't get 0
    // we could have solved this with 0-2 numbers but its more clear this way
    let randomNumber = Math.floor(Math.random() * choiceNumber) + 1;
    let computerChoice;


    switch (randomNumber) {
        case 1:
            computerChoice = "Rock"
            rock.classList.add('selected');
            break;
        case 2:
            computerChoice = "Paper"
            paper.classList.add('selected');
            break;
        case 3:
            computerChoice = "Scissors"
            scissors.classList.add('selected');
            break;
    }
    return computerChoice;
}

function playRound(human, computer) {

    if (human === "Rock" && computer === "Rock") {
        return "tie";
    } else if (human === "Paper" && computer === "Paper") {
        return "tie";
    } else if (human === "Scissors" && computer === "Scissors") {
        return "tie";
    } else if (human === "Rock" && computer === "Scissors") {
        return "win";
    } else if (human === "Rock" && computer === "Paper") {
        return "lose";
    } else if (human === "Paper" && computer === "Rock") {
        return "win";
    } else if (human === "Paper" && computer === "Scissors") {
        return "lose";
    } else if (human === "Scissors" && computer === "Rock") {
        return "lose";
    } else if (human === "Scissors" && computer === "Paper") {
        return "win";
    } else {
        return "wrong input";
    }
}

function game(human, computer, reuslt) {
    const result = document.querySelector('.result')
    if (humanScore === 5 || computerScore === 5) {
        return;
    }
    let resultOfGame = reuslt;
    console.log(resultOfGame);
    if (resultOfGame === "tie") {
        result.innerText = `TIE! Humans = ${humanScore} - Computers = ${computerScore}`;
    } else if (resultOfGame === "win") {
        humanScore++;
        console.log(humanScore);
        result.innerText = `WIN! Humans = ${humanScore} - Computers = ${computerScore}`;
    } else if (resultOfGame === "lose") {
        computerScore++;
        console.log(computerScore);
        result.innerText = `LOSE! Humans = ${humanScore} - Computers = ${computerScore}`;
    } else {
        result.innerText = 'hmm'
    }
    const playagain = document.querySelector('.playAgain');
    if (humanScore === 5) {
            result.innerText = `Humanity won suprasingly!`;
            playagain.innerText = 'Want to save other people on different realities who lost to the machine? Reload the page.';
    }
    if (computerScore === 5) {
        result.innerText = `Humanity is doomed!`;
        playagain.innerText = 'Want to jump to another reality to try again? Then reload the page, I was too lazy too add buttons.';

    }
}



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
function eventPlayer() {
    humanChoice = getHumanChoice(this.value);
    computerChoice = getComputerChoice();
    game(humanChoice, computerChoice, playRound(humanChoice, computerChoice));
}
rock.addEventListener("click", eventPlayer, false)
paper.addEventListener("click", eventPlayer, false)
scissors.addEventListener("click", eventPlayer, false)



