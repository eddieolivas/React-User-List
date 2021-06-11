import { useState } from 'react';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState(undefined);
  const [isValid, setIsValid] = useState(true);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0) {
      setIsValid(false);
      return;
    } else if (!userAge) {
      setIsValid(false);
      return;
    }
    
    props.addUser({
      name: userName,
      age: userAge
    });
    setUserAge('');
    setUserName('');
  };

  return (
    <div>
      <form className={styles.AddUser} onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input value={userName} type="text" onChange={userNameChangeHandler} />

        <label>Age (Years)</label>
        <input value={userAge} type="number" onChange={userAgeChangeHandler} />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;