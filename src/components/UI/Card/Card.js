import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${styles.Card} ${props.styleName}`}>
      {props.children}
    </div>
  )
};

export default Card;
