const fs = require('fs')

const rounds = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')

const lookUpTable = {
  A: 'ROCK',
  B: 'PAPER',
  C: 'SCISSORS',
  X: 'LOSE',
  Y: 'DRAW',
  Z: 'WIN',
}
const roundScores = {
  WIN: 6,
  DRAW: 3,
  LOSE: 0,
}
const choiceScores = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}

let score = 0

for (const round of rounds) {
  const opponentChoice = lookUpTable[round[0]]
  const playerCondition = lookUpTable[round[2]]

  const getPlayerChoice = (choice, condition) => {
    if (condition === 'WIN') {
      if (choice === 'ROCK') return 'PAPER'
      if (choice === 'PAPER') return 'SCISSORS'
      return 'ROCK'
    } else if (condition === 'LOSE') {
      if (choice === 'ROCK') return 'SCISSORS'
      if (choice === 'PAPER') return 'ROCK'
      return 'PAPER'
    } return choice
  }

  const playerChoice = getPlayerChoice(opponentChoice, playerCondition)

  score += choiceScores[playerChoice] + roundScores[playerCondition]
}

console.log(score)
