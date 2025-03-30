import {
  CreateSeasonProfileDto,
  SeasonProfile,
} from '@/models/seasonProfile.model'
import { SeasonProfileApi } from '@utils/interfaces/api.interface'
import axios from './axios.service'
import { SeasonService } from './season.service'
const SEASONS_URL = `season-profile`

export class SeasonProfileService {
  static findAll = async () => {
    return await axios.get(SEASONS_URL)
  }
  static createOne = async (data: CreateSeasonProfileDto) => {
    const res = await axios.post(SEASONS_URL, data)
    return res.data
  }
  static findOneBySeason = async (
    seasonID: string,
  ): Promise<SeasonProfile | undefined> => {
    const res = await this.findAll()
    const seasonsProfile = this.toSeasonsProfile(res.data)
    return seasonsProfile.find((item) => item.season._id === seasonID)
  }

  //extra logic
  static autoCreateOne = async (seasonID: string) => {
    const foundSeasonProfile = await this.findOneBySeason(seasonID)
    if (!foundSeasonProfile) {
      const newSeasonProfile = await SeasonProfileService.createOne({
        seasonID,
        winRate: 0,
        totalMatches: 0,
      })
      return SeasonProfileService.toSeasonProfile(newSeasonProfile)
    }
    return foundSeasonProfile
  }

  // cast
  static toSeasonsProfile = (
    seasonProfilesApi: SeasonProfileApi[],
  ): SeasonProfile[] => {
    return seasonProfilesApi.map((item) => this.toSeasonProfile(item))
  }

  static toSeasonProfile = (
    seasonProfileApi: SeasonProfileApi,
  ): SeasonProfile => {
    try {
      return {
        _id: seasonProfileApi._id,
        totalMatches: seasonProfileApi.totalMatches,
        winRate: seasonProfileApi.winRate,
        season: SeasonService.toSeason(seasonProfileApi.seasonID),
      }
    } catch (error) {
      throw Error(`Error on cast SeasonProfileApi:, ${error}`)
    }
  }
}
