
interface Box {
  l: number
  w: number
  h: number
}

const example1: Box[] = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]

const example2: Box[] = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

const example3: Box[] = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

const fitsInOneBox = (boxes: Box[]): boolean => {
  const ordenedBoxesByL = boxes.sort((a, b) => a.l < b.l ? -1 : 0)

  return ordenedBoxesByL.every((box, index) => {
    if (index + 1 < ordenedBoxesByL.length) {
      return box.l < ordenedBoxesByL[index + 1]?.l &&
             box.h < ordenedBoxesByL[index + 1]?.h &&
             box.w < ordenedBoxesByL[index + 1]?.w
    }

    return true
  })
}

const init = (): void => {
  console.log(fitsInOneBox(example1))
  console.log(fitsInOneBox(example2))
  console.log(fitsInOneBox(example3))
}

init()
