import { useState } from 'react'
import './Dot.scss'

const Dot = () => {
  let [xPosition, setXPosition] = useState<number>(0)
  let [yPosition, setYPosition] = useState(0)
  const [counter, setCounter] = useState(0)
  const [clickCounter, setClickCounter] = useState(0)

  const getCursorPosition = (event: any) => {
    const x = event.clientX
    setXPosition(xPosition = x - 6)
    const y = event.clientY
    setYPosition(yPosition = y - 6)
    console.log(x, y)
  }

  const addTow = () => {
    setCounter(counter + 2)
    setClickCounter(clickCounter + 1)
  }
  const removeTow = () => {
    setCounter(counter - 2)
    setClickCounter(clickCounter + 1)
  }

  return (
    <div className='wrapper' onMouseMove={getCursorPosition}>

      < div className='dot' style={{ left: + xPosition + 'px', top: yPosition + 'px' }}></div>
      <p>count:{counter}</p>
      <button onClick={addTow}>+2</button>
      <button onClick={removeTow}>-2</button>
      <p>click count:{clickCounter}</p>
    </div>
  )
}


export default Dot