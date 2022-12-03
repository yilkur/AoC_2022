const fs = require('fs')

const rucksacks = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')

console.log(rucksacks)

const priorityList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const getPriority = letter => priorityList.indexOf(letter) + 1

let priorityItemsSum = 0

for (const rucksack of rucksacks) {
  const firstCompartment = rucksack.slice(0, rucksack.length / 2)
  const secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length)
  
  let priorityItem = ''

  for (const item of firstCompartment) {
    if (secondCompartment.includes(item)) {
      priorityItem = item
      priorityItemsSum += getPriority(priorityItem)
      break
    }
  }
}

console.log(priorityItemsSum)

