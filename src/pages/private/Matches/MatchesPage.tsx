import MatchService from '@/services/match.service'
import Card from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Main from '@components/Layout/Main/Main'
import Table from '@components/Table/Table'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function MatchesPage() {
  const [data, setData] = useState<
    Array<{ [key: string]: string | number | boolean | null }>
  >([])

  const getMatches = async () => {
    try {
      const res = await MatchService.findAll()
      const matches = MatchService.toMatchesTable(res.data)
      setData(matches)
    } catch (error) {
      toast.error(`error on get matches ${error}`)
    }
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
          data={data}
        />
      </Card>
    </Main>
  )
}
export default MatchesPage
