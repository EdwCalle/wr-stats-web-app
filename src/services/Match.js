import { exampleData } from '@/dataWR'

export const getMatchs = () => {
  return [...exampleData]
}
export const getMatchByDate = (date) => {
  const formatedDate = date.toISOString().split('T')[0]
  const data = getMatchs()
  // TO DO: if date is now, get the lastMatch data and create a newMatch
  // TO DO: if date is in range
  //TO DO: If date doesnt exist, search match with the latest date from selected date, and
  const match = data.find((item) => item.date === formatedDate)

  return match ? match : getNewMatch()

  // console.log(formatedDate)
}

export const getNewMatch = () => {
  return {
    ID: 1,
    date: null,
    victories: null,
    defeats: null,
    totalMatches: null,
    diff: null,
    acumDiff: null,
    playedTime: null,
    rankedTier: null,
    points: null,
  }
}
