import React, { FC, useState } from 'react'
import UpdatedComponent from './higherOrder/PersonWithLogic'

interface Person3Props {
    money: number,
    handleIncrease: () => void
}

const Person3:FC<Person3Props> = ({money, handleIncrease}) => {

  return (
    <div>
        <h2>Sam is offering ${money}</h2>
        <button onClick={handleIncrease}>Offer More!</button>
    </div>
  )
}

export default UpdatedComponent(Person3) 