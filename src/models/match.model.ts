import { RankedTier } from './rankedTier.model'
import { Season } from './season.model'
import { SeasonProfile } from './seasonProfile.model'

export interface Match {
  _id: string | null
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

export const emptyMatch = (
  date: Date,
  season: Season,
  rankedTier: RankedTier,
): Match => {
  return {
    _id: null,
    date: date,
    victories: 0,
    defeats: 0,
    seasonProfile: {
      _id: null,
      season: season,
      totalMatches: 0,
      winRate: 0,
    },
    range: {
      divisionLvl: 1,
      marks: 0,
      rankedTier: rankedTier,
    },
  }
}
