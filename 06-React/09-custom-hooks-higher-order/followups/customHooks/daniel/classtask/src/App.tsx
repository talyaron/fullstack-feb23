import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import Counter from './components/counter/Counter'
import CounterOnHover from './components/counter/CounterOnHover'
import TitleOne from './components/counter/title/TitleOne'
import TitleTwo from './components/counter/title/TitleTwo'
import Homepage from "./components/counter/home/Homepage"

// # followup

// 1. create a custom hook that has a counter function to add 2. it should also contain the counter state.
// 2. create two components, one should count clicks on a button, one should count clicks on hover.
// 3. use the use Hook function to add logic to your components.

// # easy

// 1. create a custom hook that is calles useDocumentTitle - it should return the document title. create two components that shows the title, using this hook.


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage />},
    { path: "/counter", element: <Counter />},
    { path: "/counter-on-hover", element: <CounterOnHover />},
    { path: "/title-one", element: <TitleOne />},
    { path: "/title-two", element: <TitleTwo />},
  ]);

  return <RouterProvider router={router} />
}
 

//   return (
//     <>
//       <Counter/>
//       <CounterOnHover />
//       <TitleOne />
//       <TitleTwo />
//     </>
//   )
// }

export default App