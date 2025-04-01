import { SeasonProfile } from '@/models/seasonProfile.model'
import { SeasonProfileService } from '@/services/seasonProfile.service'
import { Option } from '@components/Select/Select'
import { useState } from 'react'

export const useSeasonProfile = () => {
  const [seasonsProfile, setSeasonsProfile] = useState<SeasonProfile[]>([])
  const loadSeasonsProfile = async (items: SeasonProfile[]) => {
    setSeasonsProfile([...items])
  }

  const getSeasonsProfile = async () => {
    const res = await SeasonProfileService.findAll()
    return SeasonProfileService.toSeasonsProfile(res.data).sort(
      (a, b) =>
        new Date(a.season.startDate).getTime() -
        new Date(b.season.startDate).getTime(),
    )
  }

  const autoLoadSeasonsProfile = async () => {
    const items = await getSeasonsProfile()
    loadSeasonsProfile(items)
  }
  const toSeasonsProfileOptions = (): Option[] => {
    const options: Option[] = seasonsProfile
      //   .sort(
      //     (a, b) =>
      //       new Date(a.season.startDate).getTime() -
      //       new Date(b.season.startDate).getTime(),
      //   )
      .map((item) => {
        if (!item._id) {
          throw new Error('SeasonProfile item is missing an id')
        }
        return {
          id: item._id,
          value: item.season.seasonName,
        }
      })
    return [...options]
  }
  return {
    seasonsProfile,
    getSeasonsProfile,
    loadSeasonsProfile,
    autoLoadSeasonsProfile,
    toSeasonsProfileOptions,
  }
}
