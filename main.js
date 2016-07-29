let userChoice = //add event listener for clicking the picture
let compChoice = Math.random()

if (compChoice <= 0.33)
  window.log('Computer chose: rock') // How do I keep track of this?
 else if (0.66 > compChoice >= 0.34) {
  window.log('Computer chose: paper')// see comment above
} else {
  window.log('Computer chose: scissors')// are these printed out in the console?
}// or do I print them in a seperate table somewhere on the window? window.log?

const compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return 'The result is a tie!'// do not log an engagement
  } if (choice1  === 'scissors') {
    if (choice2 === 'paper') {
      return 'scissors wins'// log an engagement --> check to see if bout/match
    } else {
      return 'paper wins'// log an engagement --> checkt to see if bout/match
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      return 'paper wins'// log an engagement --> check for match/bout
    }
  } else if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      return 'rock wins'// log an engagement --> check for match/bout
    }
  }
}
console.log(compare(userChoice, compChoice))

  document.querySelector('.output').textContent = 'Let\'s Play!'


document.addEventListener('DOMContentLoaded', init)
