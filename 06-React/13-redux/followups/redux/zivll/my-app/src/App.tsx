import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import DatNight from "./pages/DatNight"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day-night" element={<DatNight />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
