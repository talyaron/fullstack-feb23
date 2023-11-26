// User.js

import React, { FC } from 'react';
import './User.scss';

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  counter: number;
  addOneToCounter: () => void;
  removeOneFromCounter: () => void;
  onClick: () => void; // Add this line
}

const User: FC<UserProps> = ({ id,firstName, lastName, counter, onClick ,addOneToCounter, removeOneFromCounter,
}) => {
  return (
    <div className='userCard' onClick={onClick}>
      <p className='userCard__id'>User ID: {id}</p>
      <h1 className='userCard__name'>First Name: {firstName}</h1>
      <p className='userCard__lastName'>Last Name: {lastName}</p>
      <p className='userCard__counter'>
        Counter: {counter}
        <button className='userCard__btn' onClick={addOneToCounter}>+</button>
        <button className='userCard__btn' onClick={removeOneFromCounter}>-</button>
      </p>
    </div>
  );
};

export default User;
