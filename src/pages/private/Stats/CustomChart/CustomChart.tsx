import BaseLineChart from '@components/BaseLineChart/BaseLineChart'
import { DataFrame } from '@components/Chart/Chart'
import LineChart from '@components/LineChart/LineChart'
import Loader from '@components/Loader/Loader'
import MultipleSelect from '@components/MultipleSelect/MultipleSelect'
import { Option } from '@components/Select/Select'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useRef, useState } from 'react'

interface CustomChartProps {
  options: Option[]
  name: string
  label: string
  getDataFrame: (ids: string[]) => Promise<DataFrame[]>
}

function CustomChart({ options, label, name, getDataFrame }: CustomChartProps) {
  const [dataframe, setDataframe] = useState<DataFrame[]>([])
  const [isLoading, setisLoading] = useState(false)
  const seasonsRef = useRef<string[]>([])
  const onSubmit = async () => {
    try {
      setisLoading(true)
      const data = await getDataFrame(seasonsRef.current)
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
      {dataframe.length == 1 && <BaseLineChart data={dataframe[0]} />}
      {dataframe.length > 1 && <LineChart data={dataframe} />}
    </>
  )
}

export default CustomChart
