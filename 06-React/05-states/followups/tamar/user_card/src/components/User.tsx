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

//   const randomColor = () => { 
//     return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
//    }
// {counter >= 5 ? {randomColor} : null}

  return (
    <div className='userCard' style={{backgroundColor: }}>
      <h3>{name}</h3>
      <h3>{lastname}</h3>
      <button onClick={handleAdd} value={id}>+</button>
      <b>{counter}</b>
      <button onClick={handleRemove} value={id}>-</button>
      
    </div>
  )
}

export default UserCard
