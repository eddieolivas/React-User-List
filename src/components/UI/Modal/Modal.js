import styles from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Button from '../Button/Button';

const Modal = (props) => {
  return (
    <>
      <BackDrop clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: 'translateY(0)',
          opacity: '1'
        }}>
          <div className={styles.ModalHeader}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.ModalBody}>
            <p>{props.message}</p>
            <div className={styles.ModalButton}>
              <Button clicked={props.modalClosed}>Okay</Button>
             </div>
          </div>
      </div>
    </>
  );
}

export default Modal;
