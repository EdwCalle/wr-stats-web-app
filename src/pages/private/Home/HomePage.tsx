// import { exampleData } from '@/dataWR'
// import { getMatchByDate } from '../../../services/match.service'
import { UseMatch } from '@/context/MatchContext'
import CrudMatch from '@/pages/private/Home/CrudMatch/CrudMatch'
import { getRankedTiers } from '@/services/rankedTier.service'
import Button from '@components/Button/Button'
import Card, { CardType } from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Details from '@components/Details/Details'
import Main from '@components/Layout/Main/Main'
import RangeInfo from '@components/RangeInfo/RangeInfo'
import { RankedTierApi } from '@utils/interfaces/api.interface'
import { useEffect, useState } from 'react'
function HomePage() {
  const { currentMatch } = UseMatch()
  const [rankedTiers, setRankedTiers] = useState<RankedTierApi[]>()
  // const onSelectDate = (date: Date) => {
  //   const match = getMatchByDate(date)
  //   setCurrentMatch(match)
  //}
  // const getCurrentMatch = async () => {
  //   const match = await getMatchByDate()
  //   return match[70]
  // }
  const fromSeasons = async () => {
    const currentRankedTiers = await getRankedTiers()
    setRankedTiers([...currentRankedTiers])
  }
  useEffect(() => {
    console.log('nose imprime:', currentMatch)
    fromSeasons()
  }, [])

  if (rankedTiers && currentMatch) {
    return (
      <Main title='HOME'>
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
        {/* <CardCalendar onSelectDate={onSelectDate} match={currentMatch} /> */}
      </Main>
    )
  }
}
export default HomePage
