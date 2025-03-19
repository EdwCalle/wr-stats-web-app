// import { exampleData } from '@/dataWR'
// import { getMatchByDate } from '../../../services/match.service'
import { UseMatch } from '@/context/MatchContext'
import { Season } from '@/models/season.model'
import CrudMatch from '@/pages/private/Home/CrudMatch/CrudMatch'
import { getRankedTiers } from '@/services/rankedTier.service'
import { apiToSeasons, getSeasons } from '@/services/season.service'
import {
  apiToSeasonProfileApi,
  getSeasonProfile,
} from '@/services/seasonProfile.service'
import Button from '@components/Button/Button'
import Card, { CardType } from '@components/Card/Card'
import CardCalendar from '@components/CardCalendar/CardCalendar'
import { ChipColor } from '@components/Chip/Chip'
import Details from '@components/Details/Details'
import Main from '@components/Layout/Main/Main'
import CrudSeasonProfile from '@components/modals/CrudSeasonProfile'
import RangeInfo from '@components/RangeInfo/RangeInfo'
import {
  RankedTierApi,
  SeasonApi,
  SeasonProfileApi,
} from '@utils/interfaces/api.interface'
import { useEffect, useState } from 'react'
function HomePage() {
  const { currentMatch } = UseMatch()
  const [rankedTiers, setRankedTiers] = useState<RankedTierApi[]>()
  const [seasons, setSeasons] = useState<Season[]>()
  const [seasonsProfile, setSeasonsProfile] = useState<SeasonProfile[]>()

  const onSelectDate = (date: Date) => {
    // const match = getMatchByDate(date)
    // setCurrentMatch(match)
    console.log(date)
  }
  // const getCurrentMatch = async () => {
  //   const match = await getMatchByDate()
  //   return match[70]
  // }
  const fromRankedTiers = async () => {
    const currentRankedTiers = await getRankedTiers()
    setRankedTiers([...currentRankedTiers])
  }
  const fromSeasons = async () => {
    const seasonsApi: SeasonApi[] = await getSeasons()
    const newSeasons = apiToSeasons(seasonsApi)
    setSeasons([...newSeasons])
  }
  const fromSeasonsProfile = async () => {
    const seasonsProfileApi: SeasonProfileApi[] = await getSeasonProfile()
    const newSeasons = apiToSeasonProfileApi(seasonsProfileApi)
    setSeasonsProfile([...newSeasons])
  }
  useEffect(() => {
    console.log('nose imprime:', currentMatch)
    fromRankedTiers()
    fromSeasons()
    fromSeasonsProfile()
  }, [])
  if (!rankedTiers || !seasons || !currentMatch)
    return <>not loaded resources</>
  // throw new ('error, not loaded resources')
  if (seasonsProfile?.length == 0) {
    return (
      <>
        <Button action='openModal' elementId='crudSeasonProfile'>
          Edit Match
        </Button>
        <CrudSeasonProfile seasons={seasons} />
      </>
    )
  }

  if (rankedTiers && currentMatch) {
    return (
      <Main title='HOME'>
        <CardCalendar
          onSelectDate={onSelectDate}
          match={currentMatch}
          seasons={seasons}
        />
        <Card
          title='Match Details'
          subtitle={currentMatch.seasonProfile.season.seasonName}
          type={CardType.details}
        >
          <RangeInfo range={currentMatch.range} />
          <Details
            data={[
              {
                label: 'victories',
                chipColor: ChipColor.good,
                value: `${currentMatch.victories}`,
              },
              {
                label: 'defeats',
                chipColor: ChipColor.bad,
                value: `${currentMatch.defeats}`,
              },
              {
                label: 'diff',
                chipColor: ChipColor.neutral,
                value: `${currentMatch.stats?.diff}`,
              },
              {
                label: 'total matches',
                chipColor: ChipColor.default,
                value: `${currentMatch.stats?.totalMatches}`,
              },
              {
                label: 'acum diff',
                chipColor: ChipColor.default,
                value: `${currentMatch.stats?.acumDiff}`,
              },
              {
                label: 'estimated played time',
                chipColor: ChipColor.default,
                value: `${currentMatch.stats?.playedTime}`,
              },
            ]}
          />
          {/* TO DO
          fix footer, button should go to footer
          */}
          <Button action='openModal' elementId='crudMatch'>
            Edit Match
          </Button>
        </Card>
        <CrudMatch currentMatch={currentMatch} rankedTiers={rankedTiers} />
      </Main>
    )
  }
}
export default HomePage
