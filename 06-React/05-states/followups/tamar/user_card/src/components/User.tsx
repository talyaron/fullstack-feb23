import React, { FC } from 'react'
import { useState } from "react";

interface UserCardProp {
  name: string;
  lastname: string;
  id: number;
  counter: number;
  handleAdd: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRemove: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const UserCard: FC<UserCardProp> = ({ id, name, lastname }) => {
const [counter, setCounter] = useState(0)

const handleAdd = () => {
    setCounter(counter + 1)
  }
  
  const handleRemove = () => {
    setCounter(counter - 1)
  }
  return (
    <div className='userCard'>
      <h3>{name}</h3>
      <h3>{lastname}</h3>
      <button onClick={handleAdd} value={id}>+</button>
      <b>{counter}</b>
      <button onClick={handleRemove} value={id}>-</button>
    </div>
  )
}

export default UserCard
