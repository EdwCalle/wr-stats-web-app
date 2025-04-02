import { ReactNode } from 'react'
import css from './Button.module.css'
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'warning'
  type?: 'button' | 'submit'
  disabled?: boolean
  handleClick?: () => void
}
const getCssType = (variant: string) => {
  if (variant === 'warning') return css.warning
  if (variant === 'secondary') return css.secondary
  if (variant === 'icon') return css.secondary
  return ''
}
function Button({
  children,
  handleClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const cssType = getCssType(variant)
  return (
    <button
      disabled={disabled}
      className={`${css.button} ${cssType}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
export default Button
