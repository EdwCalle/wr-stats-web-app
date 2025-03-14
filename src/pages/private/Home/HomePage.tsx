// import { exampleData } from '@/dataWR'
// import { getMatchByDate } from '../../../services/match.service'
import { exampleMatch, Match } from '@/models/match.model'
import Card from '@components/Card/Card'
import Chip, { ChipColor } from '@components/Chip/Chip'
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
        <Chip value={currentMatch.victories} color={ChipColor.good} />
        <Details
          data={[
            {
              label: 'test',
              chipColor: ChipColor.good,
              value: currentMatch.victories + '',
            },
            {
              label: 'test',
              chipColor: ChipColor.bad,
              value: currentMatch.defeats + '',
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
