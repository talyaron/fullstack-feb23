import { useEffect, useState } from 'react'
import './App.scss'
import Cards from './components/Cards'
import Search from './components/Search'
import { getAllDogsBreeds } from './api/getDogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleDog from './pages/SingleDog'

function App() {
  const [allBreeds, setAllBreeds] = useState([])
  const [allBreedsToShow, setAllBreedsToShow] = useState([...allBreeds])
  const getAllBreeds = async () => {
    const result = await getAllDogsBreeds()
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

{/* // <>
    //   {allBreeds ? <Search allBreeds={allBreeds} setAllBreedsToShow={setAllBreedsToShow} /> : <p>nothing here</p>}
    //   {allBreedsToShow ? <Cards allBreedsToShow={allBreedsToShow} /> : <p>nothing here</p>}
    // </> */}

export default App
