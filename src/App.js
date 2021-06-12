import React, { useState } from 'react';

import styles from './App.module.css';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Eddie',
      age: 20
    }
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [
      user,
      ...prevUsers
    ]);
  };

  return (
    <div className={styles.App}>
      <h1>User List App</h1>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
