
import { useEffect, useState } from 'react'
import './App.css'
import { getAllRecipesAxios, getAllRecipesFetch } from './api/allApi'
import Register from './components/Register'

function App() {
  const [recipes, setRecpies] = useState([])

  useEffect(() => {
    getAllRecipesFetch()
  }, [])

  const handleGetAllRecepies = async () => {
    try {
      const data = await getAllRecipesAxios()
      setRecpies(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleGetAllRecepies()
  }, [])

  return (
    <>
      {/* {JSON.stringify(recipes)} */}
      <Register />
    </>
  )
}

export default App
