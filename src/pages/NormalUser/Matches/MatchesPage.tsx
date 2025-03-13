import { useEffect, useState } from 'react'
import Card from '../../../components/Card'
import { ChipColor, ChipType } from '../../../components/Chip/Chip'
import Main from '../../../components/Layout/Main/Main'
import Table from '../../../components/Table/Table'
import { getAllMatches } from '../../../services/match.service'
const HEADERS = [
  { label: '_id', type: ChipType.extended, color: ChipColor.default },
  { label: 'date', type: ChipType.extended, color: ChipColor.default },
  { label: 'victories', type: ChipType.default, color: ChipColor.good },
  { label: 'defeats', type: ChipType.default, color: ChipColor.bad },
  { label: 'season pro', type: ChipType.extended, color: ChipColor.default },
  { label: 'rankedTierID', type: ChipType.extended, color: ChipColor.default },
  { label: 'divisionLvl', type: ChipType.default, color: ChipColor.default },
  { label: 'marks', type: ChipType.default, color: ChipColor.neutral },
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
        <Table cellType={HEADERS} data={matches} />
      </Card>
    </Main>
  )
}
export default MatchesPage
