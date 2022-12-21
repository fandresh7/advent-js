
const createCube = (size: number): string => {
  const topCube = []
  const bottomCube = []

  for (let i = 1; i <= size; i++) {
    const top = ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size)
    const bottom = ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size)

    topCube.push(top)
    bottomCube.push(bottom)
  }

  const cube = topCube.join('\n') + '\n' + bottomCube.reverse().join('\n')

  return cube
}

console.log(createCube(0))
