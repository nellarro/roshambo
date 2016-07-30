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
    computerChoice = rock
    console.log('rock')
}
}

rock.addEventListener('click', startGame)
// scissors.addEventListener('click', test2)
// paper.addEventListener('click', test3)


// document.addEventListener('click', startGame)
//
// let startGame = () => {
//   document.querySelector('.input').button = userChoice
// }

// <input>
// <button class="es">Click 1 for Spanish</button>
// <button class="en">Click 2 for English</button>

// <script>
//   let language = ''
//   const greet = function(){
//     let heading = document.querySelector('h1')
//     let nameInput = document.querySelector('input')
//     let word = ''
//     if(language === 'English'){
//       word = 'Hello, '
//     } else {
//       word = 'Hola, '
//     }
//     heading.innerText = word + nameInput.value
//   }
//   let englishButton = document.querySelector('.en')
//   englishButton.addEventListener('click', function(){
//     language = 'English'
//     greet()
//   })
//   let spanishButton = document.querySelector('.es')
//   spanishButton.addEventListener('click', function(){
//     language = 'Spanish'
//     greet()
//   })
// </script>
