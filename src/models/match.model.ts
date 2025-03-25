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

// export type MatchI = Match | undefined
//extra function

export const MatchfromApi = (matchApi: MatchApi): Match => {
  try {
    return {
      _id: matchApi._id,
      date: toLocalDate(matchApi.date),
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
const toLocalDate = (isoDate: string): Date => {
  const date = new Date(isoDate)
  date.setHours(0)
  return date
}
// const ParseToLocalDate
// export type MatchKeys = keyof Match
// export function getKeys(obj: Match): (keyof MatchKeys)[] {
//   return Object.keys(obj) as (keyof MatchKeys)[]
// }

export const newMatch: Match = {
  _id: 'new',
  date: new Date(),
  victories: 0,
  defeats: 0,
  seasonProfile: {
    _id: 'new',
    season: {
      _id: 'new',
      seasonName: 'no selected',
      startDate: new Date(),
      finishDate: new Date(),
    },
    totalMatches: 0,
    winRate: 0,
  },
  range: {
    divisionLvl: 1,
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
}
