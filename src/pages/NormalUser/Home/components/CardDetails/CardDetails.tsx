import Card from '../../../../../components/Card/Card'
import RangeInfo from '../../../../../components/Range/RangeInfo'
import { Match } from '../../../../../services/Match/match.model'
import { handleShowModal } from '../../../../../utils/logic'
import css from './CardDetails.module.css'
type CardDetailsProps = {
  match: Match
}
function CardDetails({ match }: CardDetailsProps) {
  const { playedTime, totalMatches, diff, acumDiff } = match
  const getBGColor = (
    value: number,
    { bad, regular, normal }: { bad: number; regular: number; normal: number },
  ) => {
    if (value <= bad) return css.bad
    if (value > bad && value <= regular) return css.regular
    if (value > regular && value <= normal) return css.normal
    if (value > normal) return css.good
  }

  return (
    <Card title='Card Details'>
      <section className={css.content}>
        <RangeInfo range={match.range} isRangeForm={false} />
        <section className={css.info}>
          <p className={css.infoTitle}>Total Played Games</p>
          <p className={`${css.infoValue}`}>{totalMatches}</p>
          <p className={css.infoTitle}>All Played Games</p>
          <p className={`${css.infoValue} ${css.normal}`}>FILL</p>
          <p className={css.infoTitle}>Diff</p>
          <p
            className={`${css.infoValue} ${getBGColor(diff, {
              bad: -2,
              regular: 0,
              normal: 2,
            })}`}
          >
            {diff}
          </p>
          <p className={css.infoTitle}>Diff Acumulated</p>
          <p
            className={`${css.infoValue} ${getBGColor(acumDiff, {
              bad: -20,
              regular: 0,
              normal: 10,
            })}`}
          >
            {acumDiff}
          </p>
          <p className={css.infoTitle}>Estimated Played Time</p>
          <p className={`${css.infoValue} ${css.default}`}>{playedTime}</p>
          <p className={css.infoTitle}>Winrate</p>
          <p className={`${css.infoValue} ${css.default}`}>FILL</p>
        </section>
      </section>
      <button
        className={css.button}
        onClick={() => handleShowModal('crudMatch')}
      >
        edit wr stats
      </button>
    </Card>
  )
}

export default CardDetails
