import { BaseSyntheticEvent, ReactNode } from 'react'
import css from './Form.module.css'
type FormProps = {
  children: ReactNode
  onSubmit?: (e?: BaseSyntheticEvent) => Promise<void>
}
function Form({ onSubmit, children }: FormProps) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
export default Form
