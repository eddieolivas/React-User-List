import UserItem from '../UserItem/UserItem';
import Card from '../UI/Card/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <ul className={styles.UserList}>
      {props.users ?
        props.users.map(user => {
          return (
            <UserItem 
              key={Math.random()}
              name={user.name}
              age={user.age} 
            />
          )
        })
      : ''
    }
    </ul>
  );
};

export default UserList;