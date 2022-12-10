const fs = require('fs')

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split(/\n/)

const instructions = data.map(instruction => instruction.split(' '))
const CRT = Array.from(Array(6), () => new Array(40).fill('.'))

let crtLine = 0
let crtIdx = 0
let instructionIdx = 0
let xRegister = 1
let waitingPeriod = 2

for (let cycle = 1; cycle < 240; cycle++) {
  const xRegisterSpan = [xRegister - 1, xRegister, xRegister + 1]

  if (xRegisterSpan.includes(crtIdx)) {
    CRT[crtLine][crtIdx] = '#'
  }

  crtIdx = cycle % 40

  if (cycle % 40 === 0) {
    crtLine++
  }

  const instruction = instructions[instructionIdx]
  const operation = instruction[0]
  const operationValue = Number(instruction[1])

  if (operation === 'noop') {
    instructionIdx++
  } else {
    waitingPeriod--
    if (waitingPeriod === 0) {
      xRegister += operationValue
      waitingPeriod = 2
      instructionIdx++
    }
  }

}

console.log(CRT.map(row => row.join('')))
