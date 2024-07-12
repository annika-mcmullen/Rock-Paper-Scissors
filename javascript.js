// JavaScript for Rock Paper Scissors
//Annika McMullen

//global variables
let humanScore =0;
let computerScore =0;

//Limit computers random choices to 3 integers between 1 and 3 (inclusive)
function getComputerChoice(){
    let compChoice= Math.floor((Math.random() *3))+1;
   return compChoice;
}

//Prompt user for their choice and store
function getHumanChoice(){
    let humanChoice = (Number(prompt("Please enter your move choice")))
    return humanChoice
}
//Display a a welcome menu
function displayMenu(){
    console.log("**********************");
    console.log("*Welcome to ROCK, *");
    console.log("*PAPER, *");
    console.log("*SCISSORS! *");
    console.log("**********************");
    console.log("As you play you will enter 1 for rock, 2 for paper, or 3 for scissors!");

}

function playRound(){
let userChoice = getHumanChoice();
let compChoice = getComputerChoice();
console.log(userChoice);
console.log(compChoice);
}
playRound();
