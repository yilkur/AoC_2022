const fs = require('fs')

const data = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split(/\n/)
  .map(row => row.split(''))

const matrix = data
let visibleCount = 0

const isEdge = (row, column) => {
  if (
    row === matrix.length - 1 ||
    row === 0 ||
    column === 0 ||
    column === matrix[0].length - 1
  ) {
    return true
  }
}

const isVisible = (line, current) => line.every(cell => cell < current)

for (let row = 0; row < matrix.length; row++) {
  for (let column = 0; column < matrix[row].length; column++) {
    if (isEdge(row, column)) {
      visibleCount++
    } else {
      const currentCell = matrix[row][column]
      const currentRow = matrix[row]
      const currentColumn = matrix.map(r => r[column])

      const leftSide = currentRow.slice(0, column)
      const rightSide = currentRow.slice(column + 1, matrix[row].length)
      const topSide = currentColumn.slice(0, row)
      const bottomSide = currentColumn.slice(row + 1, matrix.length)

      if (
        isVisible(leftSide, currentCell) ||
        isVisible(rightSide, currentCell) ||
        isVisible(topSide, currentCell) ||
        isVisible(bottomSide, currentCell)
      ) {
        visibleCount++
      }
    }
  }
}

console.log(visibleCount)
