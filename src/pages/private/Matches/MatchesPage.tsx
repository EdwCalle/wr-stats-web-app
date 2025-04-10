import Card, { CardType } from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Main from '@components/Layout/Main/Main'
import Table from '@components/Table/Table'
import { useMatches } from '@hooks/useMatches'
import { useEffect } from 'react'
// export function getTableHeaders(params: object) {
//   return Object.keys(params)
// }
function MatchesPage() {
  const { autoLoadMatches, getMatchesTable } = useMatches()

  const data = getMatchesTable()
  useEffect(() => {
    autoLoadMatches()
  }, [])
  return (
    <Main title='Matches' isFullSize={true}>
      <Card type={CardType.table} title='Matchs Played' subtitle=''>
        <Table
          customCells={[
            { propName: 'victories', color: ChipColor.good },
            { propName: 'defeats', color: ChipColor.bad },
            { propName: 'marks', color: ChipColor.neutral },
          ]}
          data={data}
        />
      </Card>
    </Main>
  )
}
export default MatchesPage
