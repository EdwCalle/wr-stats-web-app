import css from './CardDetails.module.css'
import Range from '@/components/Range'
import Card from '@/components/Card'
import { getRange } from '@/logic'
function CardDetails({ showCrudMatch, data }) {
  const newData = getRange(data)
  const { playedTime, totalMatches, diff, acumDiff } = data

  const getBGColor = (value, { bad, regular, normal }) => {
    console.log(value)
    if (value <= bad) return css.bad
    if ((value > bad) & (value <= regular)) return css.regular
    if ((value > regular) & (value <= normal)) return css.normal
    if (value > normal) return css.good
  }
  // console.log(data)

  return (
    <Card>
      <section className={css.content}>
        <Range data={newData} />
        <section className={css.info}>
          <p className={css.infoTitle}>Total Played Games</p>
          <p className={`${css.infoValue}`}>{totalMatches}</p>
          <p className={css.infoTitle}>All Played Games</p>
          <p className={`${css.infoValue} ${css.normal}`}>FILL</p>
          <p className={css.infoTitle}>Diff</p>
          <p
            className={`${css.infoValue} ${getBGColor(diff, { bad: -2, regular: 0, normal: 2 })}`}
          >
            {diff}
          </p>
          <p className={css.infoTitle}>Diff Acumulated</p>
          <p
            className={`${css.infoValue} ${getBGColor(acumDiff, { bad: -20, regular: 0, normal: 10 })}`}
          >
            {acumDiff}
          </p>
          <p className={css.infoTitle}>Estimated Played Time</p>
          <p className={`${css.infoValue} ${css.default}`}>{playedTime}</p>
          <p className={css.infoTitle}>Winrate</p>
          <p className={`${css.infoValue} ${css.default}`}>FILL</p>
        </section>
      </section>
      <button className={css.button} onClick={showCrudMatch}>
        edit wr stats
      </button>
    </Card>
  )
}

export default CardDetails
