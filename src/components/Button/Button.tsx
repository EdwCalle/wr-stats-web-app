import { ReactNode } from 'react'
import css from './Button.module.css'
interface ButtonProps {
  children: ReactNode
  action: 'closeModal' | 'openModal' | 'none'
  elementId: string
}
const handleShowModal = (id: string): void => {
  const modal = document.getElementById(id) as HTMLDialogElement | null
  modal?.showModal()
}
const handleCloseModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement | null
  if (modal && id === 'confirm') {
    modal.close()
  }
}
const onAction = (action: string, id: string) => {
  switch (action) {
    case 'openModal':
      handleShowModal(id)
      break
    case 'closeModal':
      handleCloseModal(id)
      break
    default:
      break
  }
}

function Button({ action, elementId, children }: ButtonProps) {
  return (
    <button className={css.button} onClick={() => onAction(action, elementId)}>
      {children}
    </button>
  )
}
export default Button
