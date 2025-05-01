import css from './CounterView.module.css'
type CounterViewProps = {
  victories: number
  defeats: number
}
function CounterView({ victories, defeats }: CounterViewProps) {
  return (
    <>
      <div className={css.counterView}>
        <div className={`${css.cell} ${css.victories}`}>
          <p className={`${css.cellTitle} ${css.victories}`}>Victories</p>
          <p className={css.cellValue}>{victories}</p>
        </div>
        <div className={css.cellDivider}></div>
        <div className={`${css.cell} ${css.defeats}`}>
          <p className={`${css.cellTitle} ${css.defeats}`}>defeats</p>
          <p className={css.cellValue}>{defeats}</p>
        </div>
      </div>
    </>
  )
}
export default CounterView
