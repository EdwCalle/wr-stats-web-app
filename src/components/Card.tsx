import { ReactNode } from 'react'
import css from './Card.module.css'
type CardProps = {
  title?: string
  subtitle?: string
  children: ReactNode
}
function Card({
  title = 'some title',
  subtitle = 'some subtitle',
  children,
  // footerTitle = 'footer title',
}: CardProps) {
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
