import css from './CardDetails.module.css'
import Range from '@/components/Range'
import Card from '@/components/Card'
function CardDetails({ showCrudMatch }) {
  return (
    <Card>
      <section className={css.content}>
        <Range />
        <section className={css.info}>
          <p className={css.infoTitle}>ESTIMATED PLAYED TIME</p>
          <p className={`${css.infoValue} ${css.good}`}>-100</p>
          <p className={css.infoTitle}>ESTIMATED PLAYED TIME</p>
          <p className={`${css.infoValue} ${css.normal}`}>-100</p>
          <p className={css.infoTitle}>ESTIMATED PLAYED TIME</p>
          <p className={`${css.infoValue} ${css.bad}`}>-100</p>
          <p className={css.infoTitle}>ESTIMATED PLAYED TIME</p>
          <p className={`${css.infoValue} ${css.default}`}>-100</p>
          <p className={css.infoTitle}>ESTIMATED PLAYED TIME</p>
          <p className={`${css.infoValue} ${css.regular}`}>-100</p>
        </section>
      </section>
      <button className={css.button} onClick={showCrudMatch}>
        edit wr stats
      </button>
    </Card>
  )
}

export default CardDetails
