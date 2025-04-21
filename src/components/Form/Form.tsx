import { BaseSyntheticEvent, ReactNode } from 'react'
import css from './Form.module.css'
type FormProps = {
  children: ReactNode
  onSubmit?: (e?: BaseSyntheticEvent) => Promise<void>
}

function Form({ onSubmit, children }: FormProps) {
  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    if (onSubmit) {
      await onSubmit(e)
    }
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
export default Form
