import Button from '@components/Button/Button'
import useModal from '@hooks/useModal'
import { ReactNode } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { ToastContainer } from 'react-toastify'
import css from './Modal.module.css'

type ModalProps = {
  elementID: string
  title?: string
  onConfirm?: () => void
  onCancel?: () => void
  children: ReactNode
}
function Modal({
  elementID,
  title = 'modal title',
  children,
  onCancel,
  onConfirm,
}: ModalProps) {
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
      <main>{children}</main>
      <footer className={css.modalFooter}>
        <Button variant='warning' handleClick={onConfirm}>
          confirm
        </Button>
        {onCancel && <Button handleClick={onCancel}>cancel</Button>}
        {!onCancel && (
          <Button handleClick={() => closeModal(elementID)}>cancel</Button>
        )}
      </footer>

      <ToastContainer
        containerId='modal'
        position='top-right'
        theme='colored'
      />
    </dialog>
  )
}
export default Modal
