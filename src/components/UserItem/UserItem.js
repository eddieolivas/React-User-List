import styles from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={styles.UserItem}>{`${props.name} (${props.age} years old)`}</li>
  );
};

export default UserItem;
