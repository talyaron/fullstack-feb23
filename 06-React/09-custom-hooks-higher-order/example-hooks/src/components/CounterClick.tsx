import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterClick = () => {
    const {counter, increment, decrement} = useCounter()

  return (
    <div>
        {counter}
        <button onClick={increment}>ADD</button>
        <button onClick={decrement}>REMOVE</button>
    </div>
  )
}

export default CounterClick