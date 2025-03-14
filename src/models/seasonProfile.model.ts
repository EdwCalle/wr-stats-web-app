import { Season } from './season.model'

export interface SeasonProfile {
  _id: string
  season: Season
  //   user: string
  winRate: number
  totalMatches: number
}
