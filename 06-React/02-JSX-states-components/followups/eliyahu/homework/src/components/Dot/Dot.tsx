import { useState } from 'react'
import './Dot.scss'

const Dot = () => {
  let [xPosition, setXPosition] = useState(0)
  let [yPosition, setYPosition] = useState(0)

  const getCursorPosition = (event: any) => {
    const x = event.clientX
    setXPosition(xPosition = x)
    const y = event.clientY
    setYPosition(yPosition = y)
    console.log(x, y)
  }

  return (
    <div className='wrapper' onMouseMove={getCursorPosition}>

      < div className='dot' style={{ left: xPosition + 'px', top: yPosition + 'px' }}></div>

    </div>
  )
}


export default Dot