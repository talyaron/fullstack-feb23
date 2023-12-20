import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Output from './components/Output';
import Input from './components/Input';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input/>}/>
        <Route path="/output" element={<Output/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
