// import { exampleData } from '@/dataWR'
// import { getMatchByDate } from '../../../services/match.service'
import { exampleMatch, Match } from '@/models/match.model'
import Card from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Details from '@components/Details/Details'
import Main from '@components/Layout/Main/Main'
import { useState } from 'react'
function HomePage() {
  const [currentMatch] = useState<Match>(exampleMatch)
  // const onSelectDate = (date: Date) => {
  //   const match = getMatchByDate(date)
  //   setCurrentMatch(match)
  //}
  // const getCurrentMatch = async () => {
  //   const match = await getMatchByDate()
  //   return match[70]
  // }
  // useEffect(())

  return (
    <Main title='HOME'>
      <Card title='Match Details'>
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
      </Card>
      {/* <CrudMatch match={currentMatch} /> */}
      {/* <CardCalendar onSelectDate={onSelectDate} match={currentMatch} /> */}
    </Main>
  )
}
export default HomePage
