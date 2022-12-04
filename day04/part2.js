const fs = require('fs')

const rangePairs = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map(el => el.split(','))

let overlapCount = 0

for (const rangePair of rangePairs) {
  const firstRange = rangePair[0].split('-')
  const secondRange = rangePair[1].split('-')

  const a = Number(firstRange[0])
  const b = Number(firstRange[1])
  const c = Number(secondRange[0])
  const d = Number(secondRange[1])

  if (!(b < c || a > d)) {
    overlapCount++
  }
}

console.log(overlapCount)
