import Card from '../../../components/Card'
import Main from '../../../components/Layout/Main'
import { exampleMatch } from '../../../utils/interfaces/match.interface'
import Table from './MatchTable/MatchTable'

const HEADER_MATCHS = [
  'id',
  'date',
  'victories',
  'defeats',
  'total_matchs',
  'diff',
  'acumDiff',
  'playedTime',
  'range',
  'points',
]
const currentMatchs = [
  exampleMatch,
  exampleMatch,
  exampleMatch,
  exampleMatch,
  exampleMatch,
]
function MatchesPage() {
  return (
    <Main title='SHEETS' isFullSize={true}>
      <Card>
        <Table header={HEADER_MATCHS} matches={currentMatchs} />
      </Card>
    </Main>
  )
}
export default MatchesPage
