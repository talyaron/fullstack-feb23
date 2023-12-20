import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { getAllDogsBreeds } from './api/getDogs'
import Home from './pages/Home'
import SingleDog from './pages/SingleDog'
interface Breed {
  name: string
}
function App() {
  const [allBreeds, setAllBreeds] = useState<Breed[]>([])
  const [allBreedsToShow, setAllBreedsToShow] = useState<Breed[]>([...allBreeds])
  const getAllBreeds = async () => {
    const result = await getAllDogsBreeds()
    if (result === undefined) throw new Error("get method not implemented")
    setAllBreeds(result)
    setAllBreedsToShow(result)
  }
  useEffect(() => {
    getAllBreeds()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home allBreeds={allBreeds} allBreedsToShow={allBreedsToShow} setAllBreedsToShow={setAllBreedsToShow} />} />
        {allBreeds.map(breed => { return <Route path={`/${breed.name}`} element={<SingleDog key={breed.name} breedName={breed.name} />} /> })}


      </Routes>
    </BrowserRouter>
  )
}

export default App
