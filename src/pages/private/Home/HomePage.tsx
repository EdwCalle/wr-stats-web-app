import { useMatch } from '@/context/MatchContext'
import { Season } from '@/models/season.model'
import CrudMatch from '@/pages/private/Home/CrudMatch/CrudMatch'
import MatchService from '@/services/match.service'
import { getRankedTiers } from '@/services/rankedTier.service'
import { apiToSeasons, getSeasons } from '@/services/season.service'
import CardCalendar from '@components/CardCalendar/CardCalendar'
import Main from '@components/Layout/Main/Main'
import { RankedTierApi, SeasonApi } from '@utils/interfaces/api.interface'
import { useEffect, useState } from 'react'
import CardDetails from './CardDetails/CardDetails'
function HomePage() {
  // from here:
  // currentMatch
  // get matches
  // get seasonsProfile
  // get rankedTiers

  const { currentMatch, matches, createMatch } = useMatch()
  const [rankedTiers, setRankedTiers] = useState<RankedTierApi[]>()
  const [seasons, setSeasons] = useState<Season[]>()
  // const [seasonsProfile, setSeasonsProfile] = useState<SeasonProfile[]>()

  const onSelectDate = (date: Date) => {
    console.log('recived date:', date)
    const foundedMatch = MatchService.getMatchByDate(matches, date)
    if (foundedMatch) createMatch(foundedMatch)

    console.log(foundedMatch)
  }

  const fromRankedTiers = async () => {
    const currentRankedTiers = await getRankedTiers()
    setRankedTiers([...currentRankedTiers])
  }
  const fromSeasons = async () => {
    const seasonsApi: SeasonApi[] = await getSeasons()
    const newSeasons = apiToSeasons(seasonsApi)
    setSeasons([...newSeasons])
  }
  // const fromSeasonsProfile = async () => {
  //   const seasonsProfileApi: SeasonProfileApi[] = await getSeasonProfile()
  //   const newSeasons = apiToSeasonProfileApi(seasonsProfileApi)
  //   setSeasonsProfile([...newSeasons])
  // }
  useEffect(() => {
    fromRankedTiers()
    fromSeasons()
    // fromSeasonsProfile()
  }, [])
  if (!rankedTiers || !seasons || !currentMatch)
    return <>not loaded resources</>

  if (rankedTiers && currentMatch && matches) {
    return (
      <Main title='HOME'>
        <CardCalendar
          onSelectDate={onSelectDate}
          currentMatch={currentMatch}
          matches={matches}
        />
        <CardDetails currentMatch={currentMatch} />
        <CrudMatch currentMatch={currentMatch} rankedTiers={rankedTiers} />
      </Main>
    )
  }
}
export default HomePage
