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
    seasons,
    isLoading,
  } = useMatch()
  if (isLoading) return <>not loaded resources</>
  if (!isLoading && currentMatch) {
    console.log('render: fragment HomePage')
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
          seasons={seasons}
        />
      </Main>
    )
  }
}

export default HomePage
