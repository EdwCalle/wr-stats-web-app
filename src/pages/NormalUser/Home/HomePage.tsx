// import { exampleData } from '@/dataWR'
import { useState } from 'react'
import Main from '../../../components/Layout/Main/Main'
import CrudMatch from '../../../components/modals/CrudMatch'
import CardCalendar from '../../../components/CardCalendar/CardCalendar'
import { getMatchByDate } from '../../../services/match.service'
import Details from '../../../components/Details/Details'

function HomePage() {
  const [currentMatch, setCurrentMatch] = useState(getMatchByDate(new Date()))
  const onSelectDate = (date: Date) => {
    const match = getMatchByDate(date)
    setCurrentMatch(match)
  }

  return (
    <Main title='HOME' isFullSize={false}>
      <CrudMatch match={currentMatch} />
      <CardCalendar onSelectDate={onSelectDate} match={currentMatch} />
      <Details data={currentMatch} />
    </Main>
  )
}
export default HomePage
