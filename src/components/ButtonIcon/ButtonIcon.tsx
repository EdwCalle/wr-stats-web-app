import { ReactNode } from 'react'
import css from './ButtonIcon.module.css'
interface ButtonIconProps {
  children: ReactNode
  type?: 'input' | 'normal'
  onClick?: () => void
}
function ButtonIcon({ children, onClick, type = 'normal' }: ButtonIconProps) {
  if (type === 'normal')
    return (
      <button className={css.button} onClick={onClick}>
        {children}
      </button>
    )
  if (type === 'input') return <label className={css.label}>{children}</label>
}
export default ButtonIcon
