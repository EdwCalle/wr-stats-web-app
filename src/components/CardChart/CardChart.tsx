import Card from '@components/Card/Card'
import LineChart from '@components/LineChart/LineChart'
import Select from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import useSeasons from '@hooks/useSeasons'
import { useSelect } from '@hooks/useSelect'
import { FILTER_SEASONS, TIME_SCALE } from '@utils/constants/constants'
import { useEffect } from 'react'
import css from './CardChart.module.css'

function CardChart() {
  const { autoLoadMatches, toMatchesOptions } = useMatches()
  const { autoLoadSeasons, toSeasonsOptions } = useSeasons()

  const matchesOptions = toMatchesOptions()
  const seasonsOptions = toSeasonsOptions()

  const seasonModeFilter = useSelect(FILTER_SEASONS)
  const seasonFilter = useSelect(seasonsOptions)
  const timeScaleFilter = useSelect(TIME_SCALE)

  const loadData = async () => {
    await autoLoadMatches()
    await autoLoadSeasons()
  }
  useEffect(() => {
    loadData()
  }, [])

  console.log('a lot of')
  return (
    <Card>
      <form>
        <Select
          name='filterMode'
          label='select filter mode'
          options={FILTER_SEASONS}
          selectedOption={seasonModeFilter[0]}
          onSelectedOption={seasonModeFilter[1]}
        />
        <Select
          name='seasons'
          label='select season'
          options={seasonsOptions}
          selectedOption={seasonFilter[0]}
          onSelectedOption={seasonFilter[1]}
        />
      </form>
      <section className={css.chartContainer}>
        <LineChart className={css.chart} data={matchesOptions} />
      </section>

      <form>
        <Select
          name='timeScales'
          label='select time'
          options={TIME_SCALE}
          selectedOption={timeScaleFilter[0]}
          onSelectedOption={timeScaleFilter[1]}
        />
      </form>
    </Card>
  )
}
export default CardChart
