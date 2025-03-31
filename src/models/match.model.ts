import { TierType } from '@utils/enums/rankedTier.enum'
import { RankedTier } from './rankedTier.model'
import { Season } from './season.model'
import { SeasonProfile } from './seasonProfile.model'

export interface Match {
  _id: string | null
  date: Date
  victories: number
  defeats: number
  seasonProfile: SeasonProfile
  range: RangeWR
  stats?: Stats
}

export interface RangeWR {
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
      season: { ...season },
      totalMatches: 0,
      winRate: 0,
    },
    range: {
      divisionLvl: rankedTier.tierType === TierType.DIVISION ? 1 : 0,
      marks: rankedTier.minMarks ?? 0,
      rankedTier: { ...rankedTier },
    },
  }
}

export interface CreateMatchDTO {
  date: string
  victories: number
  defeats: number
  seasonProfileID: string
  range: {
    rankedTierID: string
    divisionLvl: number
    marks: number
  }
}

export interface UpdateMatchDTO {
  // date: string
  victories: number
  defeats: number
  // seasonProfileID: string
  range: {
    rankedTierID: string
    divisionLvl: number
    marks: number
  }
}

export interface QueryMatchesDto {
  page: number
  limit: number
  seasonProfileID: string
}
