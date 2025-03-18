import { Match } from '@/models/match.model'
import css from './CounterView.module.css'
type CounterViewProps = {
  match: Match
}
function CounterView({ match }: CounterViewProps) {
  const { victories, defeats } = match
  return (
    <>
      <div className={css.counterView}>
        <div className={`${css.cell} ${css.victories}`}>
          <p className={css.cellValue}>{victories}</p>
          <p className={`${css.cellTitle} ${css.victories}`}>Victories</p>
        </div>
        <div className={css.cellDivider}></div>
        <div className={`${css.cell} ${css.defeats}`}>
          <p className={css.cellValue}>{defeats}</p>
          <p className={`${css.cellTitle} ${css.defeats}`}>defeats</p>
        </div>
      </div>
    </>
  )
}
export default CounterView
