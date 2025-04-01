import Button from '@components/Button/Button'
import { DataFrame } from '@components/Chart/Chart'
import Form from '@components/Form/Form'
import LineChart from '@components/LineChart/LineChart'
import MultipleSelect from '@components/MultipleSelect/MultipleSelect'
import { Option } from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import { useEffect, useRef, useState } from 'react'

interface CompareMatchesChartProps {
  seasonsProfile: Option[]
}

function CompareMatchesChart({ seasonsProfile }: CompareMatchesChartProps) {
  const { autoLoadMatches, getDataFrame } = useMatches()
  const [dataframe, setDataframe] = useState<DataFrame[]>([])

  const seasonsRef = useRef<string[]>([])

  const onSubmit = async () => {
    console.log('from filter:', seasonsRef.current)
    const data = await getDataFrame(seasonsRef.current)
    setDataframe(data)
  }

  useEffect(() => {
    autoLoadMatches()
  }, [])

  return (
    <>
      <Form onSubmit={onSubmit}>
        <fieldset>
          <MultipleSelect
            name='seasons'
            options={seasonsProfile}
            onChange={(values) => {
              seasonsRef.current = [...values]
            }}
            label='select seasons'
          />
          <Button variant='primary' type='submit'>
            Apply
          </Button>
        </fieldset>
      </Form>
      <LineChart data={dataframe} />
    </>
  )
}

export default CompareMatchesChart
