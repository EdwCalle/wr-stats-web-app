// import LineChart from './LineChart/LineChart'
import {
  FILTER_SEASONS,
  SEASONS,
  TIME_SCALE,
} from '../../utils/constants/constants'
import Card from '../Card/Card'
import Select from '../Select/Select'
import css from './CardChart.module.css'

function CardChart() {
  // const dataWR = exampleData.map((value) => ({
  //   time: value.date,
  //   value: value.acumDiff,
  // }))
  return (
    <Card>
      <form action=''>
        <Select
          name='filterMode'
          scales={FILTER_SEASONS}
          scaleSelected={FILTER_SEASONS[0].value}
        />
        <Select values={SEASONS} title='seasons' />
      </form>
      <section className={css.chartContainer}>
        {/* <LineChart className={css.chart} data={dataWR} /> */}
      </section>

      <form>
        <Select
          name='timeScale'
          scales={TIME_SCALE}
          scaleSelected={TIME_SCALE[0].value}
        />
      </form>
    </Card>
  )
}
export default CardChart
