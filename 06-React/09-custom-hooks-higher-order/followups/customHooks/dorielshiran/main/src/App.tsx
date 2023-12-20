import "./App.css";
import { Money } from "./components/money/Money";
import { People } from "./components/people/People";
import { Title } from "./components/title/Title";

function App() {
  return (
    <>
      <Title />
      <Money />
      <People />
    </>
  );
}

export default App;
