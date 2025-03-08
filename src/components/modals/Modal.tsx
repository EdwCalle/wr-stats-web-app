import { IoIosCloseCircle } from "react-icons/io";
import css from "./Modal.module.css";
import { handleCloseModal } from "../../logic";
function Modal({ id, title = "modal title", children }) {
  return (
    <dialog id={id} className={css.modal}>
      <header className={css.modalHeader}>
        <h3 className={css.modalHeaderTitle}>{title}</h3>
        <button
          className={css.modalHeaderExitButton}
          onClick={() => handleCloseModal(id)}
        >
          <IoIosCloseCircle className="icon" size={40} />
        </button>
      </header>
      {children}
      {/* <div></div> */}
    </dialog>
  );
}
export default Modal;
