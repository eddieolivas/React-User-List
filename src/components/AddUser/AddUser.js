import { useState } from 'react';

import styles from './AddUser.module.css';
import Modal from '../../components/UI/Modal/Modal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState(undefined);
  const [isValid, setIsValid] = useState(true);
  const [userAgeValid, setUserAgeValid] = useState(true);

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
    } else if (userAge < 0) {
      setIsValid(false);
      setUserAgeValid(false);
      return;
    }
    
    props.addUser({
      name: userName,
      age: userAge
    });
    setUserAge('');
    setUserName('');
  };

  const closeModalHandler = () => {
    setIsValid(true);
  }

  return (
    <div>
      <Modal show={!isValid} modalClosed={closeModalHandler}>
        {userAgeValid ? 'Please enter a valid name and age (non-empty values).'
          : 'Please enter a valid age. (> 0)'}
      </Modal>
      <form className={styles.AddUser} onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value={userName} type="text" onChange={userNameChangeHandler} />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={userAge} type="number" onChange={userAgeChangeHandler} />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
