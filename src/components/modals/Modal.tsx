import { IoIosCloseCircle } from 'react-icons/io'
import css from './Modal.module.css'
import { handleCloseModal } from '../../utils/logic'
import { ReactNode } from 'react'

type ModalProps = {
  elementID: string
  title?: string
  children: ReactNode
}
function Modal({ elementID, title = 'modal title', children }: ModalProps) {
  return (
    <dialog id={elementID} className={css.modal}>
      <header className={css.modalHeader}>
        <h3 className={css.modalHeaderTitle}>{title}</h3>
        <button
          className={css.modalHeaderExitButton}
          onClick={() => handleCloseModal(elementID)}
        >
          <IoIosCloseCircle className='icon' size={40} />
        </button>
      </header>
      {children}
      {/* <div></div> */}
    </dialog>
  )
}
export default Modal
