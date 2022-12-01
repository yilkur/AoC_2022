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

const sumTopThree = data => {
  const sortData = list => {
    const reducedList = list.map(entry => entry.reduce((acc, val) => acc + val))
    const sortedList = reducedList.sort((a, b) => b - a)
    return sortedList
  }

  const sortedData = sortData(data)
  const topThreeSum = sortedData.slice(0, 3).reduce((acc, val) => acc + val)

  return topThreeSum
}

console.log(sumTopThree(dataArray))
