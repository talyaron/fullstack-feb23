// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import BreedPage from '../view/BreedPage/BreedsPage';

// const DogBreedRouter: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/breeds" element={<BreedPage />} />
//       <Route path="/breeds/:breed" element={<BreedPage />} />
//     </Routes>
//   );
// };


import BreedItem from '../components/BreedsItem/BreedItem';
import BreedPage from '../view/BreedPage/BreedsPage';
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  { path: "/", element: <BreedPage /> },
  { path: "/breeds/:id", element: <BreedItem/> },
]);
