import CardCalendar from '@components/CardCalendar/CardCalendar'
import Main from '@components/Layout/Main/Main'
import { useMatch } from '@hooks/useMatch'
import CardDetails from './CardDetails/CardDetails'
import CrudMatch from './CrudMatch/CrudMatch'
function HomePage() {
  const {
    currentMatch,
    rankedTiers,
    matches,
    getMatchByDate,
    createMatch,
    isLoading,
  } = useMatch()

  if (isLoading) return <>not loaded resources</>
  else {
    console.log('render: fragment HomePage')
    // console.log(currentMatch)
    return (
      <Main title='HOME'>
        <CardCalendar
          onSelectDate={getMatchByDate}
          currentMatch={currentMatch}
          matches={matches}
        />
        <CardDetails currentMatch={currentMatch} />
        <CrudMatch
          currentMatch={currentMatch}
          onSubmit={createMatch}
          rankedTiers={rankedTiers}
        />
      </Main>
    )
  }
}
export default HomePage
