import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button 
      className={`${styles.Button} ${props.styleName}`} 
      onClick={props.clicked} 
      type={props.btnType || 'button'}>
      {props.children}
    </button>
  );
};

export default Button;
