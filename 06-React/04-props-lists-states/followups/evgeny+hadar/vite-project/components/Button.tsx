import React from 'react'
import { FC } from 'react';
import appcss from '../src/App.scss'

interface ButtonProps {
    handleClick: () => void
    freetext:string
}




const Button:FC<ButtonProps> = ({handleClick,freetext}) => {
  return (
    <button className='buttonstyle' onClick={handleClick}>

       {freetext}
    </button>
  )
}

export default Button
