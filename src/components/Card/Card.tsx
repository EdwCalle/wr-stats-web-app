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
  type?: 'default' | 'details' | 'calendar' | 'table'
  children: ReactNode
}
const cssCardType = (type?: 'default' | 'details' | 'calendar' | 'table') => {
  switch (type) {
    case 'details':
      return css.details
    case 'calendar':
      return css.calendar
    case 'table':
      return css.table
    default:
      return css.default
  }
}
function Card({
  title = '',
  subtitle = '',
  type = 'default',
  children,
  // footerTitle = 'footer title',
}: CardProps) {
  return (
    <article className={css.card}>
      <header className={css.cardHeader}>
        <h3 className={css.cardTitle}>{title}</h3>
        <h4 className={css.cardSubtitle}>{subtitle}</h4>
      </header>
      <section className={cssCardType(type)}>{children}</section>
      {/* <footer>{footerTitle}</footer> */}
    </article>
  )
}
export default Card
