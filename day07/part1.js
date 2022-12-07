const fs = require('fs')

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' })

const solve = input => {
  const sizes = { '/': 0 }
  const paths = ['/']
  const lines = input.split('\n')

  for (let i = 1; i < lines.length; i++) {
    const [, cmd, dir] = lines[i].split(' ')

    if (cmd === 'ls') {
      for (i++; i < lines.length; i++) {
        const parts = lines[i].split(' ')

        if (parts[0] === '$') {
          i--
          break
        }

        if (parts[0] !== 'dir') {
          for (const path of paths) {
            sizes[path] = (sizes[path] ?? 0) + Number(parts[0])
          }
        }
      }
    } else {
      if (dir === '..') {
        paths.pop()
      } else {
        paths.push(`${paths.at(-1)}${dir}/`)
      }
    }
  }

  const result = Object.values(sizes)
    .filter(size => size <= 100000)
    .reduce((acc, size) => acc + size)

  return result
}

console.log(solve(data))
