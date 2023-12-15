import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Post from './components/Post/Post'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div className='wrapper'>
    //   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    //     <span className="material-symbols-outlined">
    //     category
    //     </span>
    //     <h4>categories</h4>
    //     <p>standard im veniam,ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    //    </div>
    // </>

    <div className='posts'>
    <Post/>
    <Post/>
    <Post/>
    </div>
  )
}



export default App
