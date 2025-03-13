// import { exampleData } from '../utils/dataWR'
import { exampleMatch, Match } from '../utils/interfaces/match.interface'
import { formatedDate } from '../utils/logic'
import api from './axios.service'
const MATCHES_GET_URL = `matches`
export const getAllMatches = async () => {
  const params = new URLSearchParams()
  params.append('page', '1')
  params.append('limit', '5')
  // params.append('seasonProfileID', '')
  const response = await api.get(MATCHES_GET_URL, { params: params })
  const result = response.data
  // console.log(result)
  const mappedData = result.map((item: Match) => toMatch(item))
  console.log(mappedData)
  return mappedData
}
function toMatch(item) {
  return {
    _id: item._id,
    date: formatedDate(item.date),
    victories: item.victories,
    defeats: item.defeats,
    seasonProfileID: item.seasonProfileID._id,
    rankedTierID: item.range.rankedTierID.tierName,
    divisionLvl: item.range.divisionLvl,
    marks: item.range.marks,
  }
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
