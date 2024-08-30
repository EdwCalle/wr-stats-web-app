import Card from './Card'
import LineChart from './LineChart'
import css from '../css/CardChart.module.css'
// const TIME_SCALE = [
//   'day',
//   'month',
//   'year',
//   '10 matchs',
//   '50 matchs',
//   '100 matchs',
//   '200 matchs',
//   '500 matchs',
// ]
// const SEASONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function CardChart() {
  return (
    <Card>
      <section className={css.chartContainer}>
        <LineChart className={css.chart} />
      </section>
    </Card>
  )
}
export default CardChart
