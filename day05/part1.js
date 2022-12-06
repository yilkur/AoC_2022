const fs = require('fs')

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n\n')

const stack = data[0].split('\n').slice(0, 8)
const instructions = data[1].split('\n')

const stacks = [[], [], [], [], [], [], [], [], []]

for (let i = 0; i < stack.length; i++) {
  const line = stack[i]

  let stackIdx = 0
  for (let j = 0; j < line.length; j += 4) {
    let crate = line.slice(j, j + 4)
    if (/[A-Z]/.test(crate)) {
      stacks[stackIdx].push(crate.match(/[A-Z]/).toString())
    }
    stackIdx++
  }
}

for (const instruction of instructions) {
  const numbers = instruction.match(/[0-9]+/g)
  console.log(numbers);
  const numberOfCrates = Number(numbers[0])
  const startStack = Number(numbers[1] - 1)
  const endStack = Number(numbers[2] - 1)

  // only one crate can be moved at a time
  for (let i = 0; i < numberOfCrates; i++) {
    console.log('-------------')
    console.log(numberOfCrates, startStack, endStack);
    console.log(stacks)
    
    const selectedCrates = stacks[startStack].splice(0, 1)
    stacks[endStack].unshift(...selectedCrates)
  }
}

const getAllTopCrates = stacks => {
  let topCrates = ''
  for (const stack of stacks) {
    topCrates += stack[0]
  }

  return topCrates
}

console.log(getAllTopCrates(stacks))
