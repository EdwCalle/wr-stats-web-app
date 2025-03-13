import { ReactNode } from 'react'
import css from './Main.module.css'
type MainProps = {
  title: string
  children: ReactNode
  isFullSize?: boolean
}
function Main({ title, children, isFullSize }: MainProps) {
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
export default Main
