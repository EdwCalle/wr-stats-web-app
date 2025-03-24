import { BaseSyntheticEvent, ReactNode } from 'react'
import css from './Form.module.css'
type FormProps = {
  // action?: string
  children: ReactNode
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void> | void
}
function Form({
  // title = 'title form card',
  // subtitle = 'subtitle form card',
  // action = '/',
  onSubmit,
  children,
}: FormProps) {
  return (
    // <Card title={title} subtitle={subtitle}>
    <form className={css.form} onSubmit={onSubmit}>
      {children}
    </form>

    // </Card>
  )
}

export default Form
