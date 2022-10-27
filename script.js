'use strict'
const currentPoints1 = document.querySelector('.currentPoints1')
const currentPoints2 = document.querySelector('.currentPoints2')
const rollDice = document.querySelector('.rollDice')
const diceImg = document.querySelector('.dice')
const holdDice = document.querySelector('.hold')

let currentScore = 0
let activePlayer = 1
let score = [0, 0]

let playing = true
function resetCurrentPoints() {
  document.querySelector(`.currentPoints1`).textContent = 0
  document.querySelector(`.currentPoints2`).textContent = 0
  currentScore = 0
}

if (playing) {
  rollDice.addEventListener('click', function () {
    function getRandomNumber(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
    }

    let dice = getRandomNumber(1, 6)
    diceImg.src = `images/dice-${dice}.png`
    diceImg.classList.remove('hidden')

    currentScore += dice
    if (dice > 1) {
      document.querySelector(`.currentPoints${activePlayer}`).textContent =
        currentScore
    } else {
      currentScore = 0
      document.querySelector(`.currentPoints${activePlayer}`).textContent =
        currentScore

      if (activePlayer === 1) {
        activePlayer = 2
        document.querySelector('.player1').classList.remove('active')
        document.querySelector('.player2').classList.add('active')
      } else {
        activePlayer = 1
        document.querySelector('.player2').classList.remove('active')
        document.querySelector('.player1').classList.add('active')
      }
      // activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1)
    }
  })
}

if (playing) {
  holdDice.addEventListener('click', function () {
    score[`${activePlayer - 1}`] += currentScore
    if (activePlayer === 1) {
      document.querySelector('.player1').classList.remove('active')
      document.querySelector('.player2').classList.add('active')
      document.querySelector(`.totalPoints${activePlayer}`).textContent =
        score[`${activePlayer - 1}`]
      activePlayer = 2
      resetCurrentPoints()
    } else {
      document.querySelector('.player2').classList.remove('active')
      document.querySelector('.player1').classList.add('active')
      resetCurrentPoints()
      document.querySelector(`.totalPoints${activePlayer}`).textContent =
        score[`${activePlayer - 1}`]
      activePlayer = 1
    }
    console.log(score)
  })
}
