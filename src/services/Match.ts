import { exampleData } from '../utils/dataWR'
import { exampleMatch } from '../utils/interfaces/match.interface'

export const getMatchs = () => {
  return [...exampleData]
}
export const getMatchByDate = (date: Date) => {
  // const formatedDate = date.toISOString().split('T')[0]
  // const data = getMatchs()
  // // TO DO: if date is now, get the lastMatch data and create a newMatch
  // // TO DO: if date is in range
  // //TO DO: If date doesnt exist, search match with the latest date from selected date, and
  // const match = data.find((item) => item.date === formatedDate)

  // return match ?? exampleMatch
  console.log(date)

  return exampleMatch
}
