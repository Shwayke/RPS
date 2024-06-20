"use strict";
const compDisplay = document.getElementById("comp-choice");
const userDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const rock = 'rock', paper = 'paper', scissors = 'scissors', win = 'win', lose = 'lose', draw = 'draw';

let userChoice, compChoice, resultVal;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;

    compChoice = generateRandomChoice();
    compDisplay.innerHTML = compChoice;

    resultVal = generateResult(userChoice, compChoice);
    resultDisplay.innerHTML = resultVal;
}))
    
//function returns a random value rock/paper/scissors
function generateRandomChoice(){
    const num = Math.floor(Math.random() * possibleChoices.length);
    switch(num){
        case 0: return rock;
        case 1: return paper;
        case 2: return scissors;
    }
}

//function returns outcome of game
//input: userChoice and compChoice
//output: 'win'/ 'lose' / 'draw'
function generateResult(userChoice, compChoice){
    let user = assignNum(userChoice), comp = assignNum(compChoice), res = -1;
    if(user !== -1 && comp !== -1){
        if(user === comp){
            res = draw;
        }
        else if((user - comp) === 1 || (user - comp) === -2){
            res = win;
        }
        else{
            res = lose;
        }
    }
    return res;
}

function assignNum(choice){
    switch(choice){
        case rock: return 0;
        case paper: return 1;
        case scissors: return 2;
        default: return -1;
    }
}