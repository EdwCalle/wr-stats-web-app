import { newDate } from '@utils/logic'
import { TierSeason, TierType } from '../utils/enums/rankedTier.enum'
import { RankedTier } from './rankedTier.models'
import { SeasonProfile } from './seasonProfile.model'

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

export interface Stats {
  playedTime: number
  totalMatches: number
  diff: number
  acumDiff: number
}

// export type MatchI = Match | undefined

// export type MatchKeys = keyof Match
// export function getKeys(obj: Match): (keyof MatchKeys)[] {
//   return Object.keys(obj) as (keyof MatchKeys)[]
// }

export const newMatch: Match = {
  _id: 'new',
  date: newDate(),
  victories: 0,
  defeats: 0,
  seasonProfile: {
    _id: 'new',
    season: {
      _id: 'new',
      seasonName: 'no selected',
      startDate: newDate(),
      finishDate: newDate(),
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
