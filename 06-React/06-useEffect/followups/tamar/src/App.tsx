import './App.css'
import { useEffect} from "react";

function App() {
 
  useEffect(() => {
    document.head.title = "Tamar";
  },[])


  return (
    <>
      hello
    </>
  )
}

export default App
