// import { exampleData } from '@/dataWR'
import { useState } from 'react'
import Main from '../../../components/Layout/Main'
import CrudMatch from '../../../components/modals/CrudMatch'
import CardCalendar from './components/CardCalendar/CardCalendar'
import CardDetails from './components/CardDetails/CardDetails'
import { getMatchByDate } from '../../../services/Match'

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
      <CardDetails match={currentMatch} />
    </Main>
  )
}
export default HomePage
