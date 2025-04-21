import Card from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Main from '@components/Layout/Main/Main'
import Loader from '@components/Loader/Loader'
import Table from '@components/Table/Table'
import { useMatches } from '@hooks/useMatches'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useState } from 'react'
// export function getTableHeaders(params: object) {
//   return Object.keys(params)
// }
function MatchesPage() {
  const { autoLoadMatches, getMatchesTable } = useMatches()
  const [isLoading, setIsLoading] = useState(true)

  const data = getMatchesTable()
  const loadData = async () => {
    try {
      setIsLoading(true)
      await autoLoadMatches()
    } catch (error) {
      showError(error, 'error on loading matches table')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  if (isLoading) return <Loader label='loading matches...' />
  return (
    <Main title='Matches' isFullSize={true}>
      <Card type='table' title='Matchs Played'>
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
