const fs = require('fs')

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n\n')
const ROUNDS = 10000

const monkeys = {}

for (const monkey of data) {
  const newMonkey = {}
  const monkeyProps = monkey.split('\n')
  const monkeyNum = Number(monkeyProps[0].match(/\d+/g))

  newMonkey['monkey' + monkeyNum] = {
    items: monkeyProps[1].match(/\d+/g).map(item => Number(item)),
    operation: monkeyProps[2].split('new = ')[1],
    testDivisibleBy: Number(monkeyProps[3].match(/\d+/g)),
    testTrue: Number(monkeyProps[4].match(/\d+/g)),
    testFalse: Number(monkeyProps[5].match(/\d+/g)),
    itemsInspected: 0,
  }

  Object.assign(monkeys, newMonkey)
}

const DIVIDER = Object.entries(monkeys)
  .map(monkey => monkey[1].testDivisibleBy)
  .reduce((acc, val) => acc * val, 1)

for (let round = 1; round <= ROUNDS; round++) {
  // each monkey takes one turn
  for (const monkey in monkeys) {
    const currentMonkey = monkeys[monkey]
    const items = currentMonkey.items
    const testDivisor = currentMonkey.testDivisibleBy
    const trueDestination = currentMonkey.testTrue
    const falseDestination = currentMonkey.testFalse

    // if monkey has no items it's turn ends
    while (items.length > 0) {
      // each monkey inspects its items
      const operation = currentMonkey.operation.replaceAll('old', items[0])
      const operationResult = eval(operation) % DIVIDER
      const isDivisibleByTestDivisor = operationResult % testDivisor === 0

      if (isDivisibleByTestDivisor) {
        monkeys['monkey' + trueDestination].items.push(operationResult)
      } else {
        monkeys['monkey' + falseDestination].items.push(operationResult)
      }

      items.shift()

      // increase number of inspected items
      currentMonkey.itemsInspected++
    }
  }
}

const itemsInspectedSorted = Object.entries(monkeys)
  .map(monkey => monkey[1].itemsInspected)
  .sort((a, b) => b - a)
const monkeyBusinessLevel = itemsInspectedSorted
  .slice(0, 2)
  .reduce((acc, val) => acc * val)

console.log(monkeyBusinessLevel)
