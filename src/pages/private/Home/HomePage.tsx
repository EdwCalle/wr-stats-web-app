import { useMatch } from '@/context/MatchContext'
import CrudMatch from '@/pages/private/Home/CrudMatch/CrudMatch'
import CardCalendar from '@components/CardCalendar/CardCalendar'
import Main from '@components/Layout/Main/Main'
import useRankedTiers from '@hooks/useRankedTiers'
import useSeasons from '@hooks/useSeasons'
import CardDetails from './CardDetails/CardDetails'
function HomePage() {
  // from here:
  // currentMatch
  // get matches
  // get seasonsProfile
  // get rankedTiers

  const { currentMatch, matches, getMatchByDate } = useMatch()
  const { seasons } = useSeasons()
  const { rankedTiers } = useRankedTiers()

  const onSelectDate = (date: Date) => {
    console.log('from onSelectDate:', date)
    getMatchByDate(date)
  }

  if (!rankedTiers || !seasons) return <>not loaded resources</>

  if (rankedTiers && matches) {
    return (
      <Main title='HOME'>
        <CardCalendar
          onSelectDate={onSelectDate}
          currentMatch={currentMatch}
          matches={matches}
        />
        <CardDetails currentMatch={currentMatch} />

        <CrudMatch currentMatch={currentMatch} rankedTiers={rankedTiers} />
      </Main>
    )
  } else return <>not loaded resources 2</>
}
export default HomePage
