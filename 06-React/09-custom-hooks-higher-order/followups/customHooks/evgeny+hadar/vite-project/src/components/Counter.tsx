import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
    const {counter,handleAddOne}=useCounter()

    useCounter()
  return (
    <div>
      
    </div>
  )
}

export default Counter
