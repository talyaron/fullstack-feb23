import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
// import { StoreProvider } from "../path/to/StoreContext"; // Import StoreProvider
import { StoreProvider } from "./context/StoreContext"; // Import StoreProvider

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        {/* Wrap the Routes with StoreProvider */}
        <StoreProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </StoreProvider>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
