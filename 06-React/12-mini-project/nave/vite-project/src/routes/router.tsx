import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DogBreedDiscussion from '../components/DogBreedDiscussion/DogBreedDiscussion';
import BreedPage from '../view/BreedPage/BreedPage';

const DogBreedRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/breeds" element={<DogBreedDiscussion />} />
      <Route path="/breeds/:breed" element={<BreedPage />} />
    </Routes>
  );
};

export default DogBreedRouter;
