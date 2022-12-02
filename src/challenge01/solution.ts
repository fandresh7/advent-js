const gifts: string[] = ['book', 'game', 'socks']

function wrapping (gifts: string[]): string[] {
  return gifts.map((gift: string) => {
    const repeat = '*'.repeat(gift.length + 2)
    return `${repeat}\n*${gift}*\n${repeat}`
  })
}

const wrapped = wrapping(gifts)
console.log(wrapped)
