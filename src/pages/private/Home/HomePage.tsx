import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
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
    matchError,
    loadData,
  } = useMatch()
  if (isLoading) return <Loader />
  if (matchError) return <ErrorMessage />
  if (!currentMatch)
    return (
      <ErrorMessage message='error loading resources, please reload the page or retry later' />
    )
  if (currentMatch) {
    console.log('render: fragment HomePage')
    return (
      <Main title='HOME'>
        <CardDetails currentMatch={currentMatch} />
        <CardCalendar
          onSelectDate={getMatchByDate}
          currentMatch={currentMatch}
          matches={matches}
        />
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
