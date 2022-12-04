const fs = require('fs')

const rangePairs = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map(el => el.split(','))

let withinRangeCount = 0

for (const rangePair of rangePairs) {
  const firstRange = rangePair[0].split('-')
  const secondRange = rangePair[1].split('-')
  const firstRangeStart = Number(firstRange[0])
  const firstRangeEnd = Number(firstRange[1])
  const secondRangeStart = Number(secondRange[0])
  const secondRangeEnd = Number(secondRange[1])

  if (
    (firstRangeStart >= secondRangeStart && firstRangeEnd <= secondRangeEnd) ||
    (secondRangeStart >= firstRangeStart && secondRangeEnd <= firstRangeEnd)
  ) {
    console.log(rangePair)
    withinRangeCount++
  }
}

console.log(withinRangeCount)