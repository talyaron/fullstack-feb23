import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingCardProvider } from "./context/ShoppingCardContext";


function App() {

  return (
    <ShoppingCardProvider>
    <NavBar />
      <Container className="mb-4">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
 
        </Routes>
      </Container>
    </ShoppingCardProvider>

  )
}

export default App
