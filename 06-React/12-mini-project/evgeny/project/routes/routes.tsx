
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alldogs from '../pages/Alldogs';
import DogChat from '../pages/DogChat';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Alldogs />} />
        <Route path="/dogchat" element={<DogChat />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;