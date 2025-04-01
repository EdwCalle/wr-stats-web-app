import BaseLineChart from '@components/BaseLineChart/BaseLineChart'
import Button from '@components/Button/Button'
import { DataFrame } from '@components/Chart/Chart'
import Form from '@components/Form/Form'
import Select, { Option } from '@components/Select/Select'
import { useSelect } from '@hooks/useSelect'
import { useState } from 'react'
interface MatchesBySeasonChartProps {
  SeasonsProfile: Option[]
  getMatchesBySeason: (seasonsProfileID: string) => DataFrame
}
function MatchesBySeasonChart({
  SeasonsProfile,
  getMatchesBySeason,
}: MatchesBySeasonChartProps) {
  const [dataframe, setDataframe] = useState<DataFrame>(
    getMatchesBySeason('all'),
  )
  const [option, selectOption] = useSelect(SeasonsProfile)

  //   const seasonsRef = useRef<string>('')

  const onSubmit = async () => {
    console.log('from filter:', option)
    const data = getMatchesBySeason(option.id)
    setDataframe(data)
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <fieldset>
          <Select
            name='by_season'
            label='select season'
            options={SeasonsProfile}
            selectedOption={option}
            onSelectedOption={selectOption}
          />
          <Button variant='primary' type='submit'>
            Apply
          </Button>
        </fieldset>
      </Form>
      <BaseLineChart data={dataframe} />
      {/* <Select
          name='timeScales'
          label='select time'
          options={TIME_SCALE}
          selectedOption={timeScaleFilter[0]}
          onSelectedOption={timeScaleFilter[1]}
          /> */}
    </>
  )
}
export default MatchesBySeasonChart
