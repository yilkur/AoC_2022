const fs = require('fs')

const rounds = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')

const lookUpChoice = {
  A: 'ROCK',
  X: 'ROCK',
  B: 'PAPER',
  Y: 'PAPER',
  C: 'SCISSORS',
  Z: 'SCISSORS',
}
const roundScores = {
  WIN: 6,
  DRAW: 3,
  LOOSE: 0,
}
const choiceScores = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}

let score = 0

for (const round of rounds) {
  const opponent = lookUpChoice[round[0]]
  const player = lookUpChoice[round[2]]
  score += choiceScores[player]

  if (
    (player === 'ROCK' && opponent === 'SCISSORS') ||
    (player === 'PAPER' && opponent === 'ROCK') ||
    (player === 'SCISSORS' && opponent === 'PAPER')
  ) {
    score += roundScores['WIN']
  } else if (
    (player === 'ROCK' && opponent === 'ROCK') ||
    (player === 'PAPER' && opponent === 'PAPER') ||
    (player === 'SCISSORS' && opponent === 'SCISSORS')
  ) {
    score += roundScores['DRAW']
  } else {
    score += roundScores['LOOSE']
  }
}

console.log(score)
