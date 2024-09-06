import css from '../css/Content.module.css'

function PageContent({ title, children, isFullSize }) {
  const sectionClassName = isFullSize
    ? `${css.section} ${css.fullSize}`
    : css.section
  return (
    <main className={css.main}>
      <h2 className={css.mainTitle}>WR STATS / {title}</h2>
      <section className={sectionClassName}>{children}</section>
    </main>
  )
}
export default PageContent
