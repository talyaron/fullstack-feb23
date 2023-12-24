import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DogsGallery from './pages/Gallery/DogsGallery';
import DogDiscussion from './pages/DogDiscussion/DogDiscussion';
import NavbarWrapper from './views/layouts/NavbarWrapper';



function App() {

  return (
    <>
      <Router>
      <NavbarWrapper />
      <Routes>
        <Route path="dogs-gallery" element={<DogsGallery />} />
        <Route path="dog-discussion/:breedName" element={<DogDiscussion />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
