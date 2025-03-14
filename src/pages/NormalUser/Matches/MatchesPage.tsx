import { useEffect, useState } from 'react'
import { ChipColor } from '../../../components/Chip/Chip'
import Main from '../../../components/Layout/Main/Main'
import Table from '../../../components/Table/Table'
import Card from '../../../components/Card/Card'
import { getAllMatches } from '../../../services/match.service'
function MatchesPage() {
  const [matches, setMatches] = useState<
    Array<{ [key: string]: string | number | boolean | null }>
  >([])

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
