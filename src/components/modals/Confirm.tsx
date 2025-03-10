import Modal from './Modal'
import Form from '../Form/Form'
type ConfirmProps = {
  titleMessage: string
}
function Confirm({ titleMessage }: ConfirmProps) {
  return (
    <Modal elementID={'confirm'} title={titleMessage}>
      <Form>
        <button>Ok</button>
        <button>Cancel</button>
      </Form>
    </Modal>
  )
}
export default Confirm
