// JavaScript for Rock Paper Scissors
//Annika McMullen

//global variables
let humanScore =0;
let computerScore =0;

//Get a random choice from comptuer and convert to a game usable choice
function getComputerChoice(){
    let compChoice = null;
    let compNum= Math.floor((Math.random() *3));
    switch(compNum){
        case 0:
            compChoice = "Rock";
            return compChoice;
        case 1:
            compChoice = "Scissors";
            return compChoice;
        case 2:
            compChoice = "Paper";
            return compChoice
        default:
            console.log("There was an error fetching the computer choice");
            break;
    }
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

}

function playRound(humanChoice, computerChoice){

}
