import css from './Form.module.css'
import { ReactNode } from 'react'
type FormProps = {
  action?: string
  children: ReactNode
}
function Form({
  // title = 'title form card',
  // subtitle = 'subtitle form card',
  action = '/',
  children,
}: FormProps) {
  return (
    // <Card title={title} subtitle={subtitle}>
    <form action={action} className={css.form}>
      {children}
    </form>
    // </Card>
  )
}

export default Form
