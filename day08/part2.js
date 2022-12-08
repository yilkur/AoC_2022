const fs = require('fs')

const data = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split(/\n/)
  .map(row => row.split(''))

const matrix = data
const [numberOfRows, numberOfCols] = [matrix.length, matrix[0].length]

let res = Number.NEGATIVE_INFINITY

const isEdge = (row, col) =>
  row === 0 || col === 0 || row === numberOfRows - 1 || col === numberOfCols - 1

const calculateScenicScore = (row, col) => {
  if (isEdge(row, col)) return 0

  const scoreAccumulator = ({ count, stop }, el) => {
    if (stop) {
      return { count, stop }
    }

    stop = el >= matrix[row][col]
    count++

    return { count, stop }
  }

  const rowValues = matrix[row]
  const colValues = Array.from(
    { length: numberOfRows },
    (_, i) => matrix[i][col]
  )

  const leftSide = rowValues
    .slice(0, col)
    .reverse()
    .reduce(scoreAccumulator, { count: 0, stop: false }).count
  const rightSide = rowValues
    .slice(col + 1)
    .reduce(scoreAccumulator, { count: 0, stop: false }).count
  const topSide = colValues
    .slice(0, row)
    .reverse()
    .reduce(scoreAccumulator, { count: 0, stop: false }).count
  const bottomSide = colValues
    .slice(row + 1)
    .reduce(scoreAccumulator, { count: 0, stop: false }).count

  const scenicScore = [leftSide, rightSide, topSide, bottomSide].reduce((acc, el) => acc * el, 1)
  return scenicScore
}

for (let row = 0; row < numberOfRows; row++) {
  for (let col = 0; col < numberOfCols; col++) {
    res = Math.max(res, calculateScenicScore(row, col))
  }
}

console.log(res)
