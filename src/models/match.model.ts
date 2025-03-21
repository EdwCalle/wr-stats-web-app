import { TierSeason, TierType } from '../utils/enums/rankedTier.enum'
import { MatchApi } from '../utils/interfaces/api.interface'
import { RankedTier } from './rankedTier.models'
import { SeasonProfile } from './seasonProfile.model'
import { Stats } from './stats.model'

export interface Match {
  _id: string
  date: Date
  victories: number
  defeats: number
  seasonProfile: SeasonProfile
  range: Ranged
  stats?: Stats
}
//TO DO
//Fix conflic with global name Range
export interface Ranged {
  // rankedTierID: string
  rankedTier: RankedTier
  divisionLvl: number
  marks: number
}

//extra function

export const MatchfromApi = (matchApi: MatchApi): Match => {
  try {
    return {
      _id: matchApi._id,
      date: new Date(matchApi.date),
      victories: matchApi.victories,
      defeats: matchApi.defeats,
      seasonProfile: {
        ...matchApi.seasonProfileID,
        season: {
          ...matchApi.seasonProfileID.seasonID,
          startDate: new Date(matchApi.seasonProfileID.seasonID.startDate),
          finishDate: matchApi.seasonProfileID.seasonID.finishDate
            ? new Date(matchApi.seasonProfileID.seasonID.finishDate)
            : null,
        },
      },
      range: {
        divisionLvl: matchApi.range.divisionLvl,
        marks: matchApi.range.marks,
        rankedTier: {
          ...matchApi.range.rankedTierID,
          tierType: matchApi.range.rankedTierID.tierType as TierType,
          tierSeason: matchApi.range.rankedTierID.tierSeason as TierSeason,
          // _id: matchApi.range.rankedTierID._id,
          // tierName: matchApi.range.rankedTierID.tierName,
          // minMarks: matchApi.range.rankedTierID.minMarks,
          // maxMarks: matchApi.range.rankedTierID.maxMarks,
        },
      },
    }
  } catch (error) {
    throw new Error(
      `from match.model,  Error on cast api to match: ${error} ,${matchApi._id}`,
    )
  }
}
export const MatchforTable = (matchApi: MatchApi) => {
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
const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return date.toISOString().substring(0, 10)
}

// export type MatchKeys = keyof Match
// export function getKeys(obj: Match): (keyof MatchKeys)[] {
//   return Object.keys(obj) as (keyof MatchKeys)[]
// }

export const exampleMatch: Match = {
  _id: 'exampleId',
  date: new Date(),
  victories: 10,
  defeats: 5,
  seasonProfile: {
    _id: 'seasonProfileIdasds',
    season: {
      _id: 'seasonId',
      seasonName: 'Season 1',
      startDate: new Date(),
      finishDate: new Date(),
    },
    totalMatches: 12,
    winRate: 12,
  },
  range: {
    divisionLvl: 3,
    marks: 100,
    rankedTier: {
      _id: '67acc1fd7b95c60b11008d21',
      tierName: 'gold',
      tierType: TierType.DIVISION,
      tierSeason: TierSeason.CUSTOM,
      minMarks: 0,
      maxMarks: 100,
    },
  },
  stats: {
    totalMatches: 10,
    diff: 12,
    acumDiff: 222,
    playedTime: 123,
  },
}
