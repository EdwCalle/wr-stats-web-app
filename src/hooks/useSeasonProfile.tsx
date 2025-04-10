import { Match } from '@/models/match.model'
import { SeasonProfile } from '@/models/seasonProfile.model'
import { SeasonProfileService } from '@/services/seasonProfile.service'
import { Option } from '@components/Select/Select'
import { useState } from 'react'

export const useSeasonProfile = () => {
  const [seasonsProfile, setSeasonsProfile] = useState<SeasonProfile[]>([])
  const loadSeasonsProfile = async (items: SeasonProfile[]) => {
    setSeasonsProfile([...items])
  }

  const getSeasonsProfile = async (matches: Match[]) => {
    const sp = await SeasonProfileService.findAllByMatches(matches)
    return sp.sort(
      (a, b) =>
        new Date(a.season.startDate).getTime() -
        new Date(b.season.startDate).getTime(),
    )
  }

  const autoLoadSeasonsProfile = async (matches: Match[]) => {
    const items = await getSeasonsProfile(matches)
    loadSeasonsProfile(items)
  }

  const toSeasonsProfileOptions = (): Option[] => {
    const options: Option[] = seasonsProfile.map((item) => {
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
