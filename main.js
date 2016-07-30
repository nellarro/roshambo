let userChoice = ''
let computerChoice = ''

const initialize = () => {
  document.querySelector('.output').textContent = 'Choose Rock, Paper, or Scissors'
}

document.addEventListener('DOMContentLoaded', initialize)

let rock = document.querySelector('.input button.rock')
console.log(rock)

let scissors = document.querySelector('.input button.scissors')
console.log(scissors)

let paper = document.querySelector('.input button.paper')
console.log(paper)

let test = () => {
  alert('Working')
}
rock.addEventListener('click', test)
scissors.addEventListener('click', test)
paper.addEventListener('click', test)

// document.addEventListener('click', startGame)
//
// let startGame = () => {
//   document.querySelector('.input').button = userChoice
// }
