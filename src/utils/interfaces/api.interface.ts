export interface MatchApi {
  _id: string
  date: string
  victories: number
  defeats: number
  seasonProfileID: SeasonProfileApi
  range: RangeApi
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export interface SeasonProfileApi {
  _id: string
  seasonID: SeasonApi
  userID: string
  winRate: number
  totalMatches: number
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export interface SeasonApi {
  _id: string
  seasonName: string
  startDate: string
  finishDate: string | null
}

export interface RangeApi {
  rankedTierID: RankedTierApi
  divisionLvl: number
  marks: number
}

export interface RankedTierApi {
  _id: string
  tierName: string
  tierSeason: string
  tierType: string
  minMarks: number
  maxMarks: number
  createdAt?: string
  updatedAt?: string
  __v?: number
}
