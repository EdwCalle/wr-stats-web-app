import MatchService from '@/services/match.service'
import Card from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Main from '@components/Layout/Main/Main'
import Table from '@components/Table/Table'
import { useEffect, useState } from 'react'
function MatchesPage() {
  const [matches, setMatches] = useState<
    Array<{ [key: string]: string | number | boolean | null }>
  >([])

  const getMatches = async () => {
    const matches = await MatchService.findAll()
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
