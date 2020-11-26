import {startConfetti, stopConfetti, removeConfetti} from './confetti.js'

const playerScoreEl = document.getElementById('playerScore')
const playerChoiceEl = document.getElementById('playerChoice')
const computerScoreEl = document.getElementById('computerScore')
const computerChoiceEl = document.getElementById('computerChoice')
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoice = ''

// Reset all 'selected' icons
function resetSelected(){
  allGameIcons.forEach( (icon)=>{
    icon.classList.remove('selected')
  });
  stopConfetti()
  removeConfetti()
}

// Reset Score & playerChoice/computerChoice
function resetAll(){
  playerScoreNumber = 0
  computerScoreNumber = 0
  playerScoreEl.textContent = playerScoreNumber
  computerScoreEl.textContent= computerScoreNumber
  playerChoiceEl.textContent = ''
  computerChoiceEl.textContent = ''
  resultText.textContent = ''
  resetSelected()
}
window.resetAll = resetAll

//Random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.round(Math.random()*4)
  switch (computerChoiceNumber){
    case  0:
      computerChoice = 'rock'
      break
    case 1:
      computerChoice = 'paper'
      break
    case 2:
      computerChoice = 'scissors'
      break
    case 3:
      computerChoice = 'lizard'
      break
    case 4:
      computerChoice = 'spock'
      break
    default:
      break
  }
}
window.select = select;
// On Startup, set initial values
resetAll()

//Add 'selected' styling & computer choice

function displayComputerChoice() {
  switch (computerChoice){
    case 'rock':
      computerRock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Piedra'
      break;
    case 'paper':
      computerPaper.classList.add('selected')
      computerChoiceEl.textContent = ' --- Papel'
      break;
    case 'scissors':
      computerScissors.classList.add('selected')
      computerChoiceEl.textContent = ' --- Tijera'
      break;
    case 'lizard':
      computerLizard.classList.add('selected')
      computerChoiceEl.textContent = ' --- Lagartija'
      break;
    case 'spock':
      computerSpock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Spock'
      break;
    default:
      break;  
    }
  }

// Check Result, increase scores, update resultText 
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice)
  
  if (playerChoice === computerChoice) {
    resultText.textContent = 'Es un empate.'

  } else {
    const choice = choices[playerChoice]
    console.log(choice.defeats.indexOf(computerChoice))
    if ( choice.defeats.indexOf(computerChoice) >-1 ) {
      startConfetti()
      resultText.textContent = "Ganaste!"
      playerScoreNumber++
      playerScoreEl.textContent = playerScoreNumber

    } else {
      resultText.textContent = "Perdiste!"
      computerScoreNumber++
      computerScoreEl.textContent = computerScoreNumber
    }
  }
}

//Call functions to process turn
function checkResult(playerChoice){
  resetSelected()
  computerRandomChoice()
  displayComputerChoice()
  updateScore(playerChoice)
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice)
  //Add 'selected' styling $ playerChoice
  switch (playerChoice){
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Piedra'
      break;
    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = ' --- Papel'
      break;
    case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent = ' --- Tijera'
      break;    
    case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent = ' --- Lagartija'
      break;
    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Spock'
      break;
    default:
      break;  
    }
  }
