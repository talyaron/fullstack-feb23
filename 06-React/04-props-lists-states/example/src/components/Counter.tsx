import React, { Dispatch, FC, SetStateAction } from 'react'

interface CounterProps {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
}

const Counter:FC<CounterProps> = ({count, setCount}) => {

    const handleAdd = () => {
        setCount(count + 1);
      };
    
      const handleSub = () => {
        setCount(count - 1);
      };

  return (
    <div style={{border: "1px solid black"}}>
        {count}
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
    </div>
  )
}

export default Counter