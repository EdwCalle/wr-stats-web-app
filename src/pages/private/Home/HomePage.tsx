import CrudMatchProvider from '@/context/CrudMatchContext'
import { useMatch } from '@/context/MatchContext'
import CardCalendar from '@components/CardCalendar/CardCalendar'
import Main from '@components/Layout/Main/Main'
import CardDetails from './CardDetails/CardDetails'
import CrudMatch from './CrudMatch/CrudMatch'
function HomePage() {
  const { currentMatch, rankedTiers, matches, getMatchByDate, isLoading } =
    useMatch()
  // console.log('render home page:', matches.length)

  if (isLoading) return <>not loaded resources</>

  if (!isLoading) {
    console.log('render: fragment HomePage')
    return (
      <Main title='HOME'>
        <CardCalendar
          onSelectDate={getMatchByDate}
          currentMatch={currentMatch}
          matches={matches}
        />
        <CrudMatchProvider>
          <CardDetails currentMatch={currentMatch} />
          <CrudMatch rankedTiers={rankedTiers} />
        </CrudMatchProvider>
      </Main>
    )
  } else return <>not loaded resources rankedTiers and matchces</>
}
export default HomePage
