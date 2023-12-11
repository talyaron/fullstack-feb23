import React from 'react'
import useCounter from '../../hooks/useCounter';

const People = () => {
    const {counter, handleAddOne} = useCounter();
  return (
    <div>
        <h1>People</h1>
        <h2>{counter}</h2>
        <button onMouseEnter={handleAddOne}>Add One on hover</button>
      
    </div>
  )
}

export default People
