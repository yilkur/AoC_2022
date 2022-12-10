const fs = require('fs')

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split(/\n/)

const instructions = data.map(instruction => instruction.split(' '))

console.log(instructions);

let cycle = 1
let xRegister = 1
const cycleIncrease = 2
const signalStrengths = []
const insterestingCycles = [20, 60, 100, 140, 180, 220]

for (const instruction of instructions) {
  const operation = instruction[0]
  const value = Number(instruction[1])
  
  if (operation === 'noop') {
    if (insterestingCycles.includes(cycle)) {
      signalStrengths.push(cycle * xRegister)
    }
    cycle++
  } else {
    for (let i = 0; i < cycleIncrease; i++) {
      if (insterestingCycles.includes(cycle)) {
        signalStrengths.push(cycle * xRegister)
      }
      cycle++
    }
    xRegister += value
  }
}

const signalStrengthsSum = signalStrengths.reduce((acc, val) => acc + val)
console.log(signalStrengthsSum)

