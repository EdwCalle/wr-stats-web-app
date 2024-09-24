import css from './CounterView.module.css'
function CounterView({ data }) {
  const { victories, defeats } = data
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
