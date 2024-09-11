import Card from '@/components/Card'
import LineChart from './FilterSelect/LineChart'
import FilterSelect from './FilterSelect/FilterSelect'
import css from './CardChart.module.css'
const TIME_SCALE = [
  'day',
  'month',
  'year',
  '10 matchs',
  '50 matchs',
  '100 matchs',
  '200 matchs',
  '500 matchs',
]
const SEASONS = [
  'Season 1',
  'Season 2',
  'Season 3',
  'Season 4',
  'Season 5',
  'Season 6',
  'Season 7',
  'Season 8',
  'Season 9',
  'Season 0',
  'Season 11',
  'Season 12',
  'Season 13',
  'Season 14',
]

function CardChart() {
  return (
    <Card>
      <FilterSelect options={SEASONS} />
      <section className={css.chartContainer}>
        <LineChart className={css.chart} />
      </section>
      <FilterSelect options={TIME_SCALE} />
    </Card>
  )
}
export default CardChart
