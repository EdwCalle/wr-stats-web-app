import Stats from './Stats'
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
const SEASONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function CardChart() {
  return (
    <article className='card'>
      <header className='card-header'>
        <h3 className='card-title'>Stats from date Selected</h3>
        <h4 className='card-subtitle'>12/12/24</h4>
      </header>
      <section className='card-content'>
        <div className='selector-container'></div>
        <div className='chart-container'>
          <Stats></Stats>
        </div>
      </section>
    </article>
  )
}
export default CardChart
