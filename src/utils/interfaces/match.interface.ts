import { TierSeason, TierType } from '../enums/rankedTier.enum'
import { rankedTier } from './rankedTier.interface'

export interface Match {
  _id: string
  date: Date
  victories: number
  defeats: number
  seasonProfileID: string
  range: Ranges
  //TO DO
  // extra fields
  id: number
  wins: number
  playedTime: number
  totalMatches: number
  diff: number
  acumDiff: number
}
// export type MatchKeys = keyof Match
// export function getKeys(obj: Match): (keyof MatchKeys)[] {
//   return Object.keys(obj) as (keyof MatchKeys)[]
// }
//TO DO
//Fix conflic with global name Range
export interface Ranges {
  rankedTierID: string
  divisionLvl: number
  marks: number
  //TO DO
  //Extra fields
  rankedTier: rankedTier
}

export const exampleMatch: Match = {
  id: 1,
  _id: 'asdasd',
  wins: 10,
  playedTime: 120,
  totalMatches: 15,
  diff: 5,
  acumDiff: 20,
  date: new Date(),
  victories: 10,
  defeats: 5,
  seasonProfileID: 'season123',
  range: {
    rankedTierID: 'tier1',
    divisionLvl: 2,
    marks: 3,
    rankedTier: {
      id: 'tier1',
      tierName: 'emerald',
      tierSeason: TierSeason.DEFAULT,
      tierType: TierType.MARK,
      minMarks: 0,
      maxMarks: 12,
    },
  },
}
