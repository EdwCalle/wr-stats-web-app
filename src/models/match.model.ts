import { TierSeason, TierType } from '../utils/enums/rankedTier.enum'
import { MatchApi } from '../utils/interfaces/api.interface'
import { rankedTier } from './rankedTier.models'
import { Stats } from './stats.model'

export interface Match {
  _id: string
  date: Date
  victories: number
  defeats: number
  seasonProfileID: string
  range: Range
  stats?: Stats
}
//TO DO
//Fix conflic with global name Range
export interface Range {
  rankedTierID: string
  divisionLvl: number
  marks: number
  //TO DO
  //Extra fields
  rankedTier: rankedTier
}

//extra function

export const MatchfromApi = (matchApi: MatchApi): Match => {
  try {
    return {
      _id: matchApi._id,
      date: new Date(matchApi.date),
      victories: matchApi.victories,
      defeats: matchApi.defeats,
      seasonProfileID: matchApi.seasonProfileID._id,
      range: {
        rankedTierID: matchApi.range.rankedTierID.tierName,
        divisionLvl: matchApi.range.divisionLvl,
        marks: matchApi.range.marks,
        rankedTier: {
          _id: matchApi.range.rankedTierID._id,
          tierName: matchApi.range.rankedTierID.tierName,
          tierType: matchApi.range.rankedTierID.tierType as TierType,
          tierSeason: matchApi.range.rankedTierID.tierSeason as TierSeason,
          minMarks: matchApi.range.rankedTierID.minMarks,
          maxMarks: matchApi.range.rankedTierID.maxMarks,
        },
      },
    }
  } catch (error) {
    throw new Error(`from match.model,  Error on cast api to match: ${error}`)
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

// export const exampleMatch: MatchModel = {
//   id: 1,
//   _id: 'asdasd',
//   wins: 10,
//   playedTime: 120,
//   totalMatches: 15,
//   diff: 5,
//   acumDiff: 20,
//   date: new Date(),
//   victories: 10,
//   defeats: 5,
//   seasonProfileID: 'season123',
//   range: {
//     rankedTierID: 'tier1',
//     divisionLvl: 2,
//     marks: 3,
//     rankedTier: {
//       id: 'tier1',
//       tierName: 'emerald',
//       tierSeason: TierSeason.DEFAULT,
//       tierType: TierType.MARK,
//       minMarks: 0,
//       maxMarks: 12,
//     },
//   },
// }
