import { Season } from './season.model'

export interface SeasonProfile {
  _id: string
  season: Season
  //   user: string
  winRate: number
  totalMatches: number
}

export interface CreateSeasonProfileDto {
  id?: string
  seasonID: string
  userID?: string
  winRate?: number
  totalMatches?: number
}
