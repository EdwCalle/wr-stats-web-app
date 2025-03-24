import Button from '@components/Button/Button'
import useModal from '@hooks/useModal'
import Modal from './Modal'
type ConfirmProps = {
  titleMessage: string
  onConfirm: () => void
  // onSubmit:
}
function Confirm({ titleMessage, onConfirm }: ConfirmProps) {
  const { closeModal } = useModal()

  return (
    <Modal elementID={'confirm'} title={titleMessage}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button type='warning' handleClick={onConfirm}>
          confirm
        </Button>
        <Button handleClick={() => closeModal('confirm')}>cancel</Button>
      </div>
    </Modal>
  )
}
export default Confirm
