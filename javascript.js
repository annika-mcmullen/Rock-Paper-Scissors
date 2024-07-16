// JavaScript for Rock Paper Scissors
//Annika McMullen

//global variables
let humanScore =0;
let computerScore =0;
let playerChoice = null;

//Get a random choice from comptuer and convert to a game usable choice
function getComputerChoice(){
    let compChoice = null;
    let compNum= Math.floor((Math.random() *3));
    switch(compNum){
        case 0:
            compChoice = "rock";
            return compChoice;
        case 1:
            compChoice = "scissors";
            return compChoice;
        case 2:
            compChoice = "paper";
            return compChoice
        default:
            console.log("There was an error fetching the computer choice");
            break;
    }
}

//Prompt user for their choice and store
function getHumanChoice(){
    let humanChoice = (prompt("Please enter your move choice")).toLowerCase();
    if (!(humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper")){
        console.log("Invalid input");

    }
    return humanChoice
}
//Display a a welcome menu
function displayMenu(){
    console.log("**********************");
    console.log("*Welcome to ROCK, *");
    console.log("*PAPER, *");
    console.log("*SCISSORS! *");
    console.log("**********************");

}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("It's a tie!");
        return;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win this round! Rock beats scissors");
        return ++humanScore;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lost this round! Paper beats rock!");
        return ++computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("It's a tie!");
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win this round! Scissors beats paper");
        return ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lost this round! Rock beats scissors!");
        return ++computerScore;
    }
    else if (humanChoice === "paper" && computerChoice ==="rock"){
        console.log("You win this round! Paper beats rock!");
        return ++humanScore;
    }
    else if (humanChoice === "paper" && computerChoice ==="paper"){
        console.log("It's a tie!");
        return;
    }
    else if (humanChoice === "paper" && computerChoice ==="scissors"){
        console.log("You lost this round! Paper beats scissors!");
        return ++computerScore;
    }
    else{
        console.log("There was an error scoring this round!");
        return;
    }
}
// function playGame(){
//     displayMenu();
//     for (i =0; i<5; i++){
//         humanChoice =  getHumanChoice();
//         compChoice = getComputerChoice();
//         playRound(humanChoice, compChoice);
//     }
//     console.log("Final scores:");
//     console.log(`Computer Score: ${computerScore} \n Player Score: ${humanScore}`);
// }
// playGame();

//select/store the buttons based off their id's
let rockBtn = document.querySelector('#rock');
let scissorBtn = document.querySelector('#scissors');
let paperBtn = document.querySelector('#paper');
~
rockBtn.addEventListener('click', (e)=>{
    playerChoice = "rock";
});
scissorBtn.addEventListener('click',(e)=>{
    playerChoice = "scissors";
});
paperBtn.addEventListener('click',(e)=>{
    playerChoice = "paper";
});
