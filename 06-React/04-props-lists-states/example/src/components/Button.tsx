import React from 'react'
import { FC } from 'react';

interface ButtonProps {
    handleClick: () => void
}

const Button:FC<ButtonProps> = ({handleClick}) => {
  return (
    <button onClick={handleClick}>
        <h1>this is button</h1>
    </button>
  )
}

export default Button