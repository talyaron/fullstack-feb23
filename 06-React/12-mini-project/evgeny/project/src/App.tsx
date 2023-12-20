import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import axios from 'axios'
import Dog from '../components/DogCard';
import Alldogs from './../components/Alldogs';

function App() {
  const [dogList, setDogList] = useState<string[]>()




  return (
    <>
      <Alldogs />
    </>
  )
}

export default App
