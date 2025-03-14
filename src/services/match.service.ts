import api from './axios.service'
import { MatchApi } from '../utils/interfaces/api.interface'
import { getStats } from '../models/stats.model'
import { MatchforTable, MatchfromApi } from '../models/match.model'
const MATCHES_GET_URL = `matches`
export const getAllMatches = async () => {
  const params = new URLSearchParams()
  params.append('page', '1')
  params.append('limit', '0')
  // params.append('seasonProfileID', '')
  const response = await api.get(MATCHES_GET_URL, { params: params })
  const result = response.data
  // console.log(result)
  const mappedData = mapData(result)
  console.log(mappedData)
  return mappedData
}
function mapData(matchesApi: MatchApi[]) {
  let totalAcumDiff = 0
  return matchesApi.map((match: MatchApi) => {
    const stats = getStats(totalAcumDiff, match.victories, match.defeats)
    totalAcumDiff += stats.diff
    return { ...MatchforTable(match), ...stats }
  })
}
export const getAllMatches2 = async () => {
  const params = new URLSearchParams()
  params.append('page', '1')
  params.append('limit', '0')
  // params.append('seasonProfileID', '')
  const response = await api.get(MATCHES_GET_URL, { params: params })
  const result = response.data
  // console.log(result)
  const mappedData = mapData2(result)
  console.log(mappedData)
  return mappedData
}
function mapData2(matchesApi: MatchApi[]) {
  let totalAcumDiff = 0
  return matchesApi.map((match: MatchApi) => {
    const stats = getStats(totalAcumDiff, match.victories, match.defeats)
    totalAcumDiff += stats.diff
    return { ...MatchfromApi(match), ...stats }
  })
}

export const getMatchByDate = async () => {
  // const formatedDate = date.toISOString().split('T')[0]
  // const data = getMatchs()
  // // TO DO: if date is now, get the lastMatch data and create a newMatch
  // // TO DO: if date is in range
  // //TO DO: If date doesnt exist, search match with the latest date from selected date, and
  // const match = data.find((item) => item.date === formatedDate)

  // return match ?? exampleMatch
  return await getAllMatches2()
}
