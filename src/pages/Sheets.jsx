import Card from '../components/Card'
import PageContent from '../components/PageContent'
import Table from '../components/Table'
import { exampleData } from '../dataWR'
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

function Sheets() {
  return (
    <PageContent title='SHEETS' isFullSize={true}>
      <Card>
        <Table header={HEADER_MATCHS} data={exampleData.splice(10, 20)} />
      </Card>
    </PageContent>
  )
}
export default Sheets
