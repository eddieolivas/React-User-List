import UserItem from '../UserItem/UserItem';

const UserList = (props) => {
  return (
    <ul>
      <UserItem name="Fred" />
      <UserItem name="Henrietta" />
    </ul>
  );

};

export default UserList;