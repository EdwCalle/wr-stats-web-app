import css from './Form.module.css'
import { BaseSyntheticEvent, ReactNode } from 'react'
type FormProps = {
  action?: string
  children: ReactNode
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>
}
function Form({
  // title = 'title form card',
  // subtitle = 'subtitle form card',
  action = '/',
  onSubmit,
  children,
}: FormProps) {
  return (
    // <Card title={title} subtitle={subtitle}>
    <form action={action} className={css.form} onSubmit={onSubmit}>
      {children}
    </form>
    // </Card>
  )
}

export default Form
