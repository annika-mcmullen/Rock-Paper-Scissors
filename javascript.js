// JavaScript for Rock Paper Scissors
//Annika McMullen

//global variables
let humanScore =0;
let computerScore =0;
let playerChoice = null;
let compChoice = null;

//Get a random choice from comptuer and convert to a game usable choice
function getComputerChoice(){

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

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        winOrLossDiv.innerText = "It's a tie!";
    }
    else if((playerChoice === "rock" && computerChoice === "scissors")||
            (playerChoice ==="scissors"&&computerChoice==="paper")||
            (playerChoice==="paper"&& computerChoice==="rock")){
                winOrLossDiv.innerText = "You won this round!";
                humanScore +=1;
    }
    else if ((playerChoice === "rock" && computerChoice === "paper")||
            (playerChoice === "scissors" && computerChoice === "rock")||
            (playerChoice === "paper" && computerChoice ==="scissors")){
                winOrLossDiv.innerText = "Computer won this round!"
                computerScore +=1;
        }
        scoreDiv.innerHTML= 'Computer score: '+ computerScore+' Human score: ' + humanScore;
        return(computerScore, humanScore);
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

//select based off tag
let body = document.querySelector('body');
~
rockBtn.addEventListener('click', (e)=>{
    //set the players choice, grab updated instance of computers choice
    playerChoice = "rock";
    compChoice= getComputerChoice();
    playRound(playerChoice,compChoice);
});
scissorBtn.addEventListener('click',(e)=>{
    playerChoice = "scissors";
    //set the players choice, grab updated instance of computers choice
    compChoice= getComputerChoice();
    playRound(playerChoice,compChoice);
});
paperBtn.addEventListener('click',(e)=>{
    playerChoice = "paper";
    //set the players choice, grab updated instance of computers choice
    compChoice= getComputerChoice();
    playRound(playerChoice,compChoice);
});

//Create a div to hold score and win/loss result of each round
let resultDiv = document.createElement('div');
body.appendChild(resultDiv);

//node to hold the result of each round
let winOrLossDiv = document.createElement('div');
resultDiv.appendChild(winOrLossDiv);

//node to hold the current score
let scoreDiv = document.createElement('div');
resultDiv.appendChild(scoreDiv);



//creates a node to display menu and inserts at top of parent node
let menu = document.createElement('div');
menu.innerText = "Welcome to Rock Paper Scissors!";
body.insertBefore(menu, rockBtn);

