import { ReactNode } from 'react'
import css from './Card.module.css'
//TO DO
//Change the name of emun cardType according to syle view
export enum CardType {
  default,
  details,
  calendar,
  table,
}
interface CardProps {
  title?: string
  subtitle?: string
  type?: CardType
  children: ReactNode
}
const cssCardType: { [key in CardType]: string } = {
  [CardType.default]: css.default,
  [CardType.details]: css.details,
  [CardType.calendar]: css.calendar,
  [CardType.table]: css.table,
}
function Card({
  title = 'some title',
  subtitle = 'some subtitle',
  type = CardType.default,
  children,
  // footerTitle = 'footer title',
}: CardProps) {
  return (
    <article className={css.card}>
      <header className={css.cardHeader}>
        <h3 className={css.cardTitle}>{title}</h3>
        <h4 className={css.cardSubtitle}>{subtitle}</h4>
      </header>
      <section className={cssCardType[type]}>{children}</section>
      {/* <footer>{footerTitle}</footer> */}
    </article>
  )
}
export default Card
