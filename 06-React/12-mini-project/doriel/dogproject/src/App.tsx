import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dog from "./pages/Dogs";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:breed" element={<Dog />} />
      </Routes>
    </Router>
  );
};

export default App;
