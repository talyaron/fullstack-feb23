import "./App.css";
import Colors from "./components/colors/Colors";
import { Product } from "./components/api/products/Product";

//npm install react-select

function App() {
  return (
    <>
      <Colors />
      <hr></hr>
      <Product />
    </>
  );
}

export default App;
