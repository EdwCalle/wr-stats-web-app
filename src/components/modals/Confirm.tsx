import Modal from './Modal'
import Form from '../Form'

function Confirm({ titleMessage }) {
  return (
    <Modal id={'confirm'} title={titleMessage}>
      <Form>
        <button>Ok</button>
        <button>Cancel</button>
      </Form>
    </Modal>
  )
}
export default Confirm
