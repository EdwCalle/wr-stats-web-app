import { ReactNode } from 'react'
import css from './Button.module.css'
interface ButtonProps {
  children: ReactNode
  type?: 'primary' | 'secondary' | 'warning'
  handleClick?: () => void
}
const getCssType = (type: string) => {
  if (type === 'warning') return css.warning
  if (type === 'secondary') return css.secondary
  return ''
}
function Button({ children, handleClick, type = 'primary' }: ButtonProps) {
  const cssType = getCssType(type)
  return (
    <button className={`${css.button} ${cssType}`} onClick={handleClick}>
      {children}
    </button>
  )
}
export default Button
