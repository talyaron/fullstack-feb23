import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Article from './components/Article'

function App() {
  
  const backgroundColor= `blue`

  return (
    <>
    <div className="wrapper" style={{display:"flex", gap:'2rem', height:`15rem`, width:'18rem'}}>

      <Article></Article>
      <Article></Article>

      <div className='cards card2' >

        

      </div>

    </div>
    </>
  )
}

export default App