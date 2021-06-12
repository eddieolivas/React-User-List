import React, { useState } from 'react';

import styles from './App.module.css';
import Card from './components/UI/Card/Card';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Eddie',
      age: 40
    },
    {
      name: 'Chloe',
      age: 26
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
      <Card>
        <AddUser addUser={addUserHandler}/>
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
}

export default App;
