import { ReactNode } from 'react'
import css from './Button.module.css'
interface ButtonProps {
  children: ReactNode
  handleClick?: () => void
}

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button className={css.button} onClick={handleClick}>
      {children}
    </button>
  )
}
export default Button
