const getGiftsToRefill = (a1: string[], a2: string[], a3: string[]): string[] => {
  const giftsToRefill: string[] = []

  const gifts = new Set([...a1, ...a2, ...a3])

  gifts.forEach(gift => {
    let count = 0

    if (a1.filter(item => item === gift).length > 0) count += 1
    if (a2.filter(item => item === gift).length > 0) count += 1
    if (a3.filter(item => item === gift).length > 0) count += 1

    if (count === 1) giftsToRefill.push(gift)
  })

  return giftsToRefill
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3))
