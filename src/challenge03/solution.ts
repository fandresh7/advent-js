
const packOfGifts: string[] = ['book', 'doll', 'ball']
const reindeers: string[] = ['dasher', 'dancer']

function distributeGifts (packOfGifts: string[], reindeers: string[]): number {
  return ((reindeers.join('').length * 2) / packOfGifts.join('').length) >> 0
}

console.log(distributeGifts(packOfGifts, reindeers))
