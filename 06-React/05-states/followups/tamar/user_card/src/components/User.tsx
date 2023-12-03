import React, { FC } from 'react'
import { useState } from "react";

interface UserCardProp {
  name: string;
  lastname: string;
  id: number;
  counter: number;
  emoji?: string;
  handleClickOnUser: (ev: any) => void;
  handleAdd: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRemove: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const UserCard: FC<UserCardProp> = ({ id, name, lastname, emoji, handleClickOnUser }) => {
  const [counter, setCounter] = useState(0)
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleRemove = () => {
    setCounter(counter - 1)
  }

  return (
    <div className='userCard' onClick={() => { handleClickOnUser(name) }} style={{ background: counter >= 5 ? '#' + randomColor : 'white' }}>
      <h3>{name}</h3>
      {(counter % 10) === 0 ? <b>{emoji}</b> : null}
      <h3>{lastname}</h3>
      <button onClick={handleAdd} value={id}>+</button>
      <b>{counter}</b>
      <button onClick={handleRemove} value={id}>-</button>
    </div>
  )
}

export default UserCard
