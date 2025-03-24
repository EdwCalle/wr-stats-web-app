import useModal from '@hooks/useModal'
import { ReactNode } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import css from './Modal.module.css'

type ModalProps = {
  elementID: string
  title?: string
  children: ReactNode
}
function Modal({ elementID, title = 'modal title', children }: ModalProps) {
  const { closeModal } = useModal()
  return (
    <dialog id={elementID} className={css.modal}>
      <header className={css.modalHeader}>
        <h3 className={css.modalHeaderTitle}>{title}</h3>
        <button
          className={css.modalHeaderExitButton}
          onClick={() => closeModal(elementID)}
        >
          <IoIosCloseCircle className='icon' size={40} />
        </button>
      </header>
      {children}
      {/* <footer className={css.modalFooter}>
        <Button type='warning' handleClick={handleModal}>
          confirm
        </Button>
        <Button>cancel</Button>
      </footer> */}
    </dialog>
  )
}
export default Modal
