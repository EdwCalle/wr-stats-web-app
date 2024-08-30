import css from './../css/CounterView.module.css'
function CounterView() {
  return (
    <>
      <div className={css.counterView}>
        <div className={`${css.cell} ${css.victories}`}>
          <p className={css.cellValue}>-100</p>
          <p className={`${css.cellTitle} ${css.victories}`}>Victories</p>
        </div>
        <div className={css.cellDivider}></div>
        <div className={`${css.cell} ${css.defeats}`}>
          <p className={css.cellValue}>-100</p>
          <p className={`${css.cellTitle} ${css.defeats}`}>defeats</p>
        </div>
      </div>
    </>
  )
}
export default CounterView
