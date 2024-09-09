import css from './Card.module.css'
function Card(props) {
  const {
    title = 'some title',
    subtitle = 'some subtitle',
    children,

    // footerTitle = 'footer title',
  } = props
  return (
    <article className={css.card}>
      <header className={css.cardHeader}>
        <h3 className={css.cardTitle}>{title}</h3>
        <h4 className={css.cardSubtitle}>{subtitle}</h4>
      </header>
      <section className={css.cardContent}>{children}</section>
      {/* <footer>{footerTitle}</footer> */}
    </article>
  )
}
export default Card
