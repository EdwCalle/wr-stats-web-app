import Chart, { SeriesData } from '@components/Chart/Chart'
import Loader from '@components/Loader/Loader'
import MultipleSelect from '@components/MultipleSelect/MultipleSelect'
import { Option } from '@components/Select/Select'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useRef, useState } from 'react'

interface CustomChartProps {
  options: Option[]
  name: string
  label: string
  getSeriesData: (ids: string[]) => SeriesData[]
}

function CustomChart({
  options,
  label,
  name,
  getSeriesData,
}: CustomChartProps) {
  const [dataframe, setDataframe] = useState<SeriesData[]>([])
  const [isLoading, setisLoading] = useState(false)
  const seasonsRef = useRef<string[]>([])
  const onSubmit = async () => {
    try {
      setisLoading(true)
      const data = getSeriesData(seasonsRef.current)
      setDataframe(data)
    } catch (error) {
      showError(error, 'error on loading data')
    } finally {
      setisLoading(false)
    }
  }

  const onChange = (seasonsID: string[]) => {
    seasonsRef.current = [...seasonsID]
    onSubmit()
  }
  useEffect(() => {
    onSubmit()
  }, [])

  return (
    <>
      <MultipleSelect
        name={name}
        options={options}
        label={label}
        onChange={onChange}
      />
      {isLoading && <Loader label='loading chart' />}
      {dataframe.length == 0 && <>0 filters</>}
      {dataframe.length == 1 && (
        <Chart multiSeries={dataframe} type='baselineSeries' />
      )}
      {dataframe.length > 1 && (
        <Chart multiSeries={dataframe} type='lineSeries' />
      )}
    </>
  )
}

export default CustomChart
