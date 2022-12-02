
const year: number = 2022
const holidays: string[] = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours (year: number, holidays: string[]): number {
  return holidays.reduce((count, holiday) => {
    const day = new Date(`${year}/${holiday}`).getDay()
    const hours = [1, 2, 3, 4, 5].includes(day) ? 2 : 0
    return count + hours
  }, 0)
}

console.log(countHours(year, holidays))
