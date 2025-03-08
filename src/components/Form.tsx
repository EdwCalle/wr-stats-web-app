import css from './Form.module.css'
import { ReactNode } from 'react'

function Form({
  // title = 'title form card',
  // subtitle = 'subtitle form card',
  action = '/',
  children,
}: {
  action: string
  children: ReactNode
}) {
  return (
    // <Card title={title} subtitle={subtitle}>
    <form action={action} className={css.form}>
      {children}
    </form>
    // </Card>
  )
}

export default Form
