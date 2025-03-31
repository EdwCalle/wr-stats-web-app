import Card from '@components/Card/Card'
import LineChart from '@components/LineChart/LineChart'
import Select from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import { useSelect } from '@hooks/useSelect'
import { FILTER_SEASONS, SEASONS, TIME_SCALE } from '@utils/constants/constants'
import { formatDate } from '@utils/logic'
import { useEffect } from 'react'
import css from './CardChart.module.css'

function CardChart() {
  // const dataWR = exampleData.map((value) => ({
  //   time: value.date,
  //   value: value.acumDiff,
  // }))
  const { matches, loadMatches, getMatches } = useMatches()
  const filtersOptions = FILTER_SEASONS.map((item) => ({
    id: item.value,
    value: item.label,
  }))
  const matchesOptions = matches.map((item) => ({
    time: formatDate(item.date.toISOString()),
    value: item.stats?.acumDiff ?? 0,
  }))

  const timeSacaleOptions = TIME_SCALE.map((item) => ({
    id: item.value,
    value: item.label,
  }))
  const filters = useSelect(filtersOptions)
  const seasons = useSelect(SEASONS)
  const timeScales = useSelect(timeSacaleOptions)

  const loadData = async () => {
    const newMatches = await getMatches()
    loadMatches(newMatches)
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <Card>
      <form>
        <Select
          name='filterMode'
          label='select filter mode'
          options={filtersOptions}
          selectedOption={filters[0]}
          onSelectedOption={filters[1]}
        />
        <Select
          name='seasons'
          label='select season'
          options={SEASONS}
          selectedOption={seasons[0]}
          onSelectedOption={seasons[1]}
        />
      </form>
      <section className={css.chartContainer}>
        <LineChart className={css.chart} data={matchesOptions} />
      </section>

      <form>
        <Select
          name='timeScales'
          label='select time'
          options={timeSacaleOptions}
          selectedOption={timeScales[0]}
          onSelectedOption={timeScales[1]}
        />
      </form>
    </Card>
  )
}
export default CardChart
