const fs = require('fs')

const data = fs.readFileSync('input.txt', { encoding: 'utf-8' })

const markerLength = 4

for (let i = 0; i < data.length - markerLength; i++) {
  const window = data.slice(i, i + markerLength)
  console.log(window)
  const uniqueWindow = [...new Set(window)]

  if (window.length === uniqueWindow.length) {
    uniqeMarker = i + markerLength
    console.log(uniqeMarker)
    return
  }
}
