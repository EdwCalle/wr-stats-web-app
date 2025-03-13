import { useEffect, useState } from 'react'
import Card from '../../../Card/Card'
import { ChipColor } from '../../../components/Chip/Chip'
import Main from '../../../components/Layout/Main/Main'
import Table from '../../../components/Table/Table'
import { getAllMatches } from '../../../services/match.service'
const HEADERS = [
  { propName: 'victories', color: ChipColor.good },
  { propName: 'defeats', color: ChipColor.bad },
  { propName: 'marks', color: ChipColor.neutral },
  // 'total_matchs',
  // 'diff',
  // 'acumDiff',
  // 'playedTime',
  // 'points',
]

function MatchesPage() {
  const [matches, setMatches] = useState([])

  const getMatches = async () => {
    const matches = await getAllMatches()
    setMatches(matches)
  }

  useEffect(() => {
    getMatches()
  }, [])
  return (
    <Main title='Matches' isFullSize={true}>
      <Card>
        <Table
          customCells={[
            { propName: 'victories', color: ChipColor.good },
            { propName: 'defeats', color: ChipColor.bad },
            { propName: 'marks', color: ChipColor.neutral },
          ]}
          data={matches}
        />
      </Card>
    </Main>
  )
}
export default MatchesPage
