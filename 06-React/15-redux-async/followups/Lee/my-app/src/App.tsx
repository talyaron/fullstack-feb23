import "./App.css"
import { useAppSelector } from "./app/hooks"
import { userSelector } from "./features/loggedUser/userSlice"

function App() {
  const user = useAppSelector(userSelector)
  return <div> Hello {user.name}</div>
}

export default App
