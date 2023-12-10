import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Homepage } from "./components/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;