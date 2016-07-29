const possibleThrows = ['Rock', 'Paper', 'Scissors']
 let userChoice = ''
 let computerChoice = ''

const init = function() {
    document.querySelector('.output').textContent = 'Let\'s Play!'
    let rock = document.querySelector('.rock')
    let paper = document.querySelector('.paper')
    let scissors = document.querySelector('.scissors')

Rock.addEventListener('click', function() {
    userChoice = 'Rock'
    begin(userChoice)
  }

/paper.addEventListener('click', function() {
     userChoice = 'Paper'
     begin(userChoice)
  }
/scissors.addEventListener('click', function() {
     userChoice = 'Scissors'
     begin(userChoice)
  }

document.addEventListener('DOMContentLoaded', init)

let compare = function(choice1, choice2){
  if(choice1 === choice2){
    return 'TIE!'
  }if (choice1 === 'scissors') {
    if (choice2 === 'paper') {
      return 'scissors wins' // log this to the scoreboard
    }else {
      return 'paper wins' // log this to the scoreboard
    }else if (choice1 === 'paper'){
      if (choice2 === 'rock') {
        return 'paper wins' // log this to the scoreboard
      }else {
        return 'rock wins' // log this to the scoreboard
      }else if (choice1 === 'rock') {
        if (choice2 === 'scissors'){
          return 'rock wins' // log this to the scoreboard
        }else {
          return 'scissors wins'// log this to the scoreboard
        }
      }
    }
compare(userChoice, computerChoice)



//document.addEventListener('DOMContentLoaded', init)
