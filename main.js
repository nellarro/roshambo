let userChoice = ''
let computerChoice = ''

const initialize = () => {
  document.querySelector('.output').textContent = 'Choose Rock, Paper, or Scissors'
}

document.addEventListener('DOMContentLoaded', initialize)

let rock = document.querySelector('.input button.rock')

let scissors = document.querySelector('.input button.scissors')

let paper = document.querySelector('.input button.paper')

let startGame = () => {
  computerChoice = Math.random()
  if (computerChoice < 0.33) {
    computerChoice = 'rock'
    console.log('rock')
  } else if (computerChoice <= 0.64) {
    computerChoice = 'paper'
    console.log('paper')
  } else {
    computerChoice = 'scissors'
    console.log('scissors')
  }
  document.querySelector('h1').textContent = 'I chose...' + computerChoice
  compare(userChoice, computerChoice)
}
let compare = (choice1, choice2) => {
  if (choice1 === choice2) {
    document.querySelector('.output').textContent = 'Great Minds Think Alike'
  } if (choice1 === 'scissors') {
    if (choice2 === 'paper') {
      document.querySelector('.output').textContent = 'You Win...This Time.'
    } else {
      document.querySelector('.output').textContent = 'You Lose.'
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      document.querySelector('.output').textContent = 'You Win...This Time.'
    } else {
      document.querySelector('.output').textContent = 'You Lose.'
    }
  } else if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      document.querySelector('.output').textContent = 'You Win...This Time.'
    } else {
      document.querySelector('.output').textContent = 'You Lose.'
    }
  }
}

rock.addEventListener('click', function () {
  userChoice = 'rock'
  startGame()
})
scissors.addEventListener('click', function () {
  userChoice = 'scissors'
  startGame()
})
paper.addEventListener('click', function () {
  userChoice = 'paper'
  startGame()
})
