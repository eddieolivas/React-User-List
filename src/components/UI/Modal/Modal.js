import styles from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';

const Modal = (props) => {
  return (
    <>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
          <div className={styles.ModalHeader}>
            <h2>Invalid Input</h2>
          </div>
          <div className={styles.ModalBody}>
            <p>{props.children}</p>
            <div className={styles.ModalButton}>
              <button onClick={props.modalClosed}>Okay</button>
             </div>
          </div>
      </div>
    </>
  );
}

export default Modal;