import { DataFrame } from '@components/Chart/Chart'
import Form from '@components/Form/Form'
import LineChart from '@components/LineChart/LineChart'
import MultipleSelect from '@components/MultipleSelect/MultipleSelect'
import { Option } from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import { useEffect, useState } from 'react'

interface CompareMatchesChartProps {
  seasonsProfile: Option[]
}

function CompareMatchesChart({ seasonsProfile }: CompareMatchesChartProps) {
  const { autoLoadMatches, getDataFrame } = useMatches()
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([])
  const [dataframe, setDataframe] = useState<DataFrame[]>([])
  const onSelectedSeasons = async (seasons: string[]) => {
    setSelectedSeasons([...seasons])
    const da = await getDataFrame(selectedSeasons)
    setDataframe(da)
  }

  useEffect(() => {
    autoLoadMatches()
  }, [])

  return (
    <Form>
      <fieldset>
        <MultipleSelect
          name='seasons'
          options={seasonsProfile}
          label='select seasons'
          onChange={onSelectedSeasons}
        />
      </fieldset>
      <LineChart data={dataframe} />
    </Form>
  )
}

export default CompareMatchesChart
