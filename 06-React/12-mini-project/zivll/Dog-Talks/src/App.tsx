import { useEffect, useState } from 'react'
import './App.css'
import { getAllDogsBreeds } from './api/getDogs'
import Cards from './components/Cards'

function App() {
  // const [allBreeds, setAllBreeds] = useState([])
  // useEffect(() => {
  //   getAllDogsBreeds(allBreeds, setAllBreeds)
  // }, [allBreeds])
  return (
    <>
      <Cards />

    </>
  )
}

export default App
