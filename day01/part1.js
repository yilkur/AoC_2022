const fs = require('fs')

const dataArray = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n\n')
  .filter(Boolean)
  .map(x =>
    x
      .replace(/[\n ,]+/g, ' ')
      .trim()
      .split(' ')
      .map(y => parseInt(y))
  )

const getMaxCalories = input => {
  let maxCal = 0

  for (const entry of input) {
    const totalCalories = entry.reduce((acc, val) => acc + val)

    if (totalCalories > maxCal) {
      maxCal = totalCalories
    }
  }

  return maxCal
}

console.log(getMaxCalories(dataArray))
