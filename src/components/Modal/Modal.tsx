import Button from '@components/Button/Button'
import Loader from '@components/Loader/Loader'
import useModal from '@hooks/useModal'
import { ReactNode } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { toast, ToastContainer } from 'react-toastify'
import css from './Modal.module.css'

type ModalProps = {
  elementID: string
  title?: string
  onConfirm?: () => void
  onCancel?: () => void
  children: ReactNode
  isLoading?: boolean
}
function Modal({
  elementID,
  title = 'modal title',
  children,
  onCancel,
  onConfirm,
  isLoading = false,
}: ModalProps) {
  const { closeModal } = useModal()
  const onCloseModal = () => {
    onCancel?.()
    toast.dismiss({ containerId: 'modal' })
    closeModal(elementID)
  }
  return (
    <dialog id={elementID} className={css.modal}>
      <header className={css.modalHeader}>
        <h3 className={css.modalHeaderTitle}>{title}</h3>
        <button className={css.modalHeaderExitButton} onClick={onCloseModal}>
          <IoIosCloseCircle className='icon' size={40} />
        </button>
      </header>
      <main>{children}</main>
      <footer className={css.modalFooter}>
        {isLoading ? (
          <Loader label='' />
        ) : (
          <>
            <Button variant='warning' handleClick={onConfirm}>
              confirm
            </Button>
            <Button handleClick={onCloseModal}>cancel</Button>
          </>
        )}
      </footer>
      <ToastContainer
        containerId='modal'
        position='top-right'
        theme='colored'
        pauseOnFocusLoss={false}
      />
    </dialog>
  )
}
export default Modal
