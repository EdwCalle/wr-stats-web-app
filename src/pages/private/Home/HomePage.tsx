import Main from '@components/Layout/Main/Main'
import Loader from '@components/Loader/Loader'
import { useMatch } from '@hooks/useMatch'
import CardCalendar from './CardCalendar/CardCalendar'
import CardDetails from './CardDetails/CardDetails'
import CrudMatch from './CrudMatch/CrudMatch'
function HomePage() {
  const {
    currentMatch,
    rankedTiers,
    matches,
    getMatchByDate,
    seasons,
    isLoading,
    loadData,
  } = useMatch()
  if (isLoading) return <Loader />
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
          rankedTiers={rankedTiers}
          seasons={seasons}
          onSubmitted={loadData}
        />
      </Main>
    )
  }
}

export default HomePage
