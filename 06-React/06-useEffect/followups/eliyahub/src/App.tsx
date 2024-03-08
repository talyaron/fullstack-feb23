import { useEffect, useState } from 'react'

import './App.css'
import Timer from './components/Timer/Timer'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Eliyahu`
  }, [])
  return (
    <>

      <div className="card">
        <button onClick={() => {
          setCount((count) => (count + 1))
          document.title = `User Clicked ${count + 1} times`
        }}>
          count is {count}
        </button>
        <Timer/>
      </div>
    </>
  )
}

export default App
