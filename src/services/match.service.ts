import { Match, Stats } from '@/models/match.model'
import { TierSeason, TierType } from '@utils/enums/rankedTier.enum'
import { MatchApi } from '@utils/interfaces/api.interface'
import { compareDate, formatDate, toApiDate, toLocalDate } from '@utils/logic'
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
    const foundMatch = matches.find((match) => compareDate(match.date, date))
    return foundMatch
  }
  static createOne = async (match: Match) => {
    const seasonID = match.seasonProfile.season._id
    match.seasonProfile = await SeasonProfileService.autoCreateOne(seasonID)
    const data = this.toCreateMatchDTO(match)
    const res = await axios.post(MATCHES_GET_URL, data)
    console.log(res.data)
    return res
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
  static toCreateMatchDTO = (match: Match) => {
    return {
      date: toApiDate(match.date),
      victories: match.victories,
      defeats: match.defeats,
      seasonProfileID: match.seasonProfile._id,
      range: {
        rankedTierID: match.range.rankedTier._id,
        ...match.range,
      },
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

  //extra function
  static toMatchesTable = (matchesApi: MatchApi[]) => {
    try {
      let totalAcumDiff = 0
      return matchesApi.map((match: MatchApi) => {
        const stats = this.getStats(
          totalAcumDiff,
          match.victories,
          match.defeats,
        )
        totalAcumDiff += stats.diff
        return { ...this.toMatchTable(match), ...stats }
      })
    } catch (error) {
      throw Error(`Error on creating stats for Matches table:${error}`)
    }
  }

  static toMatchTable = (matchApi: MatchApi) => {
    try {
      return {
        _id: matchApi._id,
        date: formatDate(matchApi.date),
        seasonProfileID: matchApi.seasonProfileID._id,
        rankedTierName: matchApi.range.rankedTierID.tierName,
        divisionLvl: matchApi.range.divisionLvl,
        marks: matchApi.range.marks,
        rankedTierID: matchApi.range.rankedTierID._id,
        tierName: matchApi.range.rankedTierID.tierName,
        tierType: matchApi.range.rankedTierID.tierType as TierType,
        tierSeason: matchApi.range.rankedTierID.tierSeason as TierSeason,
        minMarks: matchApi.range.rankedTierID.minMarks,
        maxMarks: matchApi.range.rankedTierID.maxMarks,
        victories: matchApi.victories,
        defeats: matchApi.defeats,
      }
    } catch (error) {
      throw new Error(
        `from match.model,  Error on cast api to match:${matchApi._id} ${error}`,
      )
    }
  }
}

export default MatchService
