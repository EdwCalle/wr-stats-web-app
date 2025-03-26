import { Match, Stats } from '@/models/match.model'
import { MatchApi } from '@utils/interfaces/api.interface'
import { toLocalDate } from '@utils/logic'
import axios from './axios.service'
import { RankedTierService } from './rankedTier.service'
import { SeasonProfileService } from './seasonProfile.service'

const MATCHES_GET_URL = `matches`

class MatchService {
  /**
   *
   * @param page number of start counting matches
   * @param limit limit por page of matches
   * @returns matches with limited items at specified page
   */
  static async findAll(page = 1, limit = 0) {
    const params = new URLSearchParams()
    params.append('page', `${page}`)
    params.append('limit', `${limit}`)
    // params.append('seasonProfileID', '')
    return await axios.get(MATCHES_GET_URL, { params: params })
  }

  static findOneByDate(matches: Match[], date: Date): Match | undefined {
    const foundMatch = matches.find(
      (match) => match.date.getTime() === date.getTime(),
    )
    return foundMatch
  }

  //customLogic
  static toMatches = (matchesApi: MatchApi[]): Match[] => {
    try {
      let totalAcumDiff = 0
      return matchesApi.map((match: MatchApi) => {
        const stats = this.getStats(
          totalAcumDiff,
          match.victories,
          match.defeats,
        )
        totalAcumDiff += stats.diff
        return { ...this.toMatch(match), stats }
      })
    } catch (error) {
      throw Error(`Error on creating stats for Matches:${error}`)
    }
  }

  static toMatch = (matchApi: MatchApi): Match => {
    try {
      return {
        ...matchApi,
        date: toLocalDate(matchApi.date),
        seasonProfile: SeasonProfileService.toSeasonProfile(
          matchApi.seasonProfileID,
        ),
        range: {
          ...matchApi.range,
          rankedTier: RankedTierService.toRankedTier(
            matchApi.range.rankedTierID,
          ),
        },
      }
    } catch (error) {
      throw new Error(`WRError on cast matchAPi: ${error} ,${matchApi._id}`)
    }
  }
  static getStats = (
    lastAccumDiff: number,
    victories: number,
    defeats: number,
  ): Stats => {
    const totalMatches = victories + Math.abs(defeats)
    const playedTime = totalMatches * 20
    const diff = victories - defeats
    const acumDiff = diff + lastAccumDiff
    return { playedTime, totalMatches, diff, acumDiff }
  }
}

export default MatchService
