import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DogBreedsGallery from './components/dogsGallery/DogBreedsGallery';
import DogBreedRouter from './routes/router';
import './App.css'; 


function App() {
  return (
    <Router>
      <>
        {/* כל דבר שכאן יוצג בכל עמוד */}
        <Routes>
          <Route path="/" element={<DogBreedsGallery />} />
          <Route path="/breeds/*" element={<DogBreedRouter />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
