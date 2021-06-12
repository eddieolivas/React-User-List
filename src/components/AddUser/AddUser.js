import { useState } from 'react';

import styles from './AddUser.module.css';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import Modal from '../../components/UI/Modal/Modal';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || !userAge) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    } else if (userAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age. (> 0)"
      });
      return;
    }
    
    props.onAddUser({
      name: userName,
      age: userAge
    });
    setUserAge('');
    setUserName('');
  };

  const closeModalHandler = () => {
    setError(false);
  }

  return (
    <div>
      {error && <Modal 
        modalClosed={closeModalHandler}
        title={error.title}
        message={error.message} 
      />}
      <Card>
        <form className={styles.AddUser} onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            value={userName} 
            type="text" 
            onChange={userNameChangeHandler} 
          />

          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age" 
            value={userAge} 
            type="number" 
            onChange={userAgeChangeHandler} 
          />

          <Button btnType="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
