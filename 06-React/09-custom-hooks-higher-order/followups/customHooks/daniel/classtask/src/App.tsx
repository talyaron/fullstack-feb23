import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import Counter from './components/counter/Counter'
import CounterOnHover from './components/counter/CounterOnHover'
import TitleOne from './components/counter/title/TitleOne'
import TitleTwo from './components/counter/title/TitleTwo'
import Homepage from "./components/counter/home/Homepage"
import OnMount from "./components/counter/timer/OnMount"
import OnDependence from "./components/counter/timer/OnDependence"



function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage />},
    { path: "/counter", element: <Counter />},
    { path: "/counter-on-hover", element: <CounterOnHover />},
    { path: "/title-one", element: <TitleOne />},
    { path: "/title-two", element: <TitleTwo />},
    { path: "/on-mount", element: <OnMount />},
    { path: "/on-dependecy", element: <OnDependence />}
  ]);

  return <RouterProvider router={router} />
}
 


export default App