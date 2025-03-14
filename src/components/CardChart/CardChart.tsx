// import LineChart from './LineChart/LineChart'
import css from './CardChart.module.css'
import Card from '../Card/Card'
import SingleSelect from '../SingleSelect/SingleSelect'
import {
  FILTER_SEASONS,
  SEASONS,
  TIME_SCALE,
} from '../../utils/constants/constants'
import MultipleSelect from '../MultipleSelect/MultipleSelect'

function CardChart() {
  // const dataWR = exampleData.map((value) => ({
  //   time: value.date,
  //   value: value.acumDiff,
  // }))
  return (
    <Card>
      <form action=''>
        <SingleSelect
          name='filterMode'
          scales={FILTER_SEASONS}
          scaleSelected={FILTER_SEASONS[0].value}
        />
        <MultipleSelect filters={SEASONS} title='seasons' />
      </form>
      <section className={css.chartContainer}>
        {/* <LineChart className={css.chart} data={dataWR} /> */}
      </section>

      <form>
        <SingleSelect
          name='timeScale'
          scales={TIME_SCALE}
          scaleSelected={TIME_SCALE[0].value}
        />
      </form>
    </Card>
  )
}
export default CardChart
