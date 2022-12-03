const fs = require('fs')

const rucksacks = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')

const groups = []

while (rucksacks.length) {
  groups.push(rucksacks.splice(0, 3))
}

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

for (const group of groups) {
  const firstRucksack = group[0]
  const secondRucksack = group[1]
  const thirdRucksack = group[2]

  for (item of firstRucksack) {
    const isCommonItem = secondRucksack.includes(item) && thirdRucksack.includes(item)
    
    if (isCommonItem) {
      priorityItemsSum += getPriority(item)
      break
    }
  }
}

console.log(priorityItemsSum)

