import React from 'react'
import useCounter from '../../hooks/useCounter';

const Money = () => {
    const{counter, handleAddOne} = useCounter();
  return (
    <div>
        <h1>Money</h1>
        <h2>{counter}</h2>
        <button onClick={handleAddOne}>Add One on click</button>
      
    </div>
  )
}

export default Money
