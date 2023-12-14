import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './views/Homepage'
import OnMountTimer from './views/OnMountTimer'

function App() {

  const router = createBrowserRouter([
    {path:"/" , element: <Homepage/>},
    {path:"/omr", element: <OnMountTimer></OnMountTimer>}
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
