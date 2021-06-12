import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';
import Card from '../../components/UI/Card/Card';

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles.UserList}>
        {props.users ?
          props.users.map(user => {
            return (
              <UserItem 
                key={Math.random().toString()}
                name={user.name}
                age={user.age} 
              />
            )
          })
        : ''
      }
      </ul>
    </Card>
  );
};

export default UserList;
