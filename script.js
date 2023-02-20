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

function getHumanChoice() {
    let humanChoice = prompt("please enter rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

function getComputerChoice() {
    let choiceNumber = 3;
    // this will get a number between 1-3 floor is used to get a number without decimals because
    // random returns a decimal number between 0-1 and we need to add + 1 so that we don't get 0
    // we could have solved this with 0-2 numbers but its more clear this way
    let randomNumber = Math.floor(Math.random() * choiceNumber) + 1;
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissors"
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

function game() {

    let humanScore = 0;
    let computerScore = 0;
    let bestOfFive = 0;
    console.log("BEGIN");
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let result = playRound(human, computer)
        if (result === "tie") {
            console.log("TIE! " + `Humans = ${humanScore} - Computers = ${computerScore}`)
        } else if (result === "win") {
            humanScore++;
            console.log("WIN! " + `Humans = ${humanScore} - Computers = ${computerScore}`)
        } else if (result === "lose") {
            computerScore++;
            console.log("LOSE! " + `Humans = ${humanScore} chose = ${human} - Computers = ${computerScore} chose = ${computer} `)
        }
    }
    if (humanScore > computerScore) {
        console.log("Humanity survived");
    } else {
        console.log("Humanity is doomed")
    }
}

game();
