import { Match, MatchforTable, MatchfromApi } from '../models/match.model'
import { getStats } from '../models/stats.model'
import { MatchApi } from '../utils/interfaces/api.interface'
import api from './axios.service'

const MATCHES_GET_URL = `matches`

class MatchService {
  static async getAllMatches() {
    const params = new URLSearchParams()
    params.append('page', '1')
    params.append('limit', '0')
    // params.append('seasonProfileID', '')
    const response = await api.get(MATCHES_GET_URL, { params: params })
    const result = response.data
    // console.log(result)
    const mappedData = this.mapData(result)
    console.log(mappedData)
    return mappedData
  }

  private static mapData(matchesApi: MatchApi[]) {
    let totalAcumDiff = 0
    return matchesApi.map((match: MatchApi) => {
      const stats = getStats(totalAcumDiff, match.victories, match.defeats)
      totalAcumDiff += stats.diff
      return { ...MatchforTable(match), ...stats }
    })
  }

  static async getAllMatches2() {
    const params = new URLSearchParams()
    params.append('page', '1')
    params.append('limit', '0')
    // params.append('seasonProfileID', '')
    const response = await api.get(MATCHES_GET_URL, { params: params })
    const result = response.data
    // console.log(result)
    const mappedData = this.mapData2(result)
    console.log(mappedData)
    return mappedData
  }

  private static mapData2(matchesApi: MatchApi[]) {
    let totalAcumDiff = 0
    return matchesApi.map((match: MatchApi) => {
      const stats = getStats(totalAcumDiff, match.victories, match.defeats)
      totalAcumDiff += stats.diff
      return { ...MatchfromApi(match), stats }
    })
  }

  static getMatchByDate(matches: Match[], date: Date): Match | undefined {
    const foundMatch = matches.find(
      (match) => match.date.getTime() === date.getTime(),
    )
    return foundMatch
  }
}

export default MatchService
