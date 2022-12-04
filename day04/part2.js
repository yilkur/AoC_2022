const fs = require('fs')

const rangePairs = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map(el => el.split(','))

let overlapCount = 0

const generateRangeArray = (start, end) => {
  const rangeArray = []

  for (let i = start; i <= end; i++) {
    rangeArray.push(i)
  }

  return rangeArray
}

for (const rangePair of rangePairs) {
  const firstRange = rangePair[0].split('-')
  const secondRange = rangePair[1].split('-')
  const firstRangeStart = Number(firstRange[0])
  const firstRangeEnd = Number(firstRange[1])
  const secondRangeStart = Number(secondRange[0])
  const secondRangeEnd = Number(secondRange[1])

  const firstNumArray = generateRangeArray(firstRangeStart, firstRangeEnd)
  const secondNumArray = generateRangeArray(secondRangeStart, secondRangeEnd)

  for (const num of firstNumArray) {
    if (secondNumArray.includes(num)) {
      overlapCount++
      break
    }
  }
}

console.log(overlapCount)
