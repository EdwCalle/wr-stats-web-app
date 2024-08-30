import css from '../css/Content.module.css'

function PageContent({ title, children }) {
  return (
    <main className={`${css.main} ${css.closed}`}>
      <h2 className={css.mainTitle}>WR STATS / {title}</h2>
      <section className={css.section}>{children}</section>
    </main>
  )
}
export default PageContent
