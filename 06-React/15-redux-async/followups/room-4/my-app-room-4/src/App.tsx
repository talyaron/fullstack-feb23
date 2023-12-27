import logo from "./logo.svg"

import "./App.css"
import Heder from "./components/heder/Heder"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { userSelector, userStatusSelector } from "./features/loggedInUser/userSlice"
import { useEffect } from "react"
import { getUserFakeApi } from "./features/loggedInUser/userAPI"

function App() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(userSelector)
  const status = useAppSelector(userStatusSelector)

  useEffect(() => {
    dispatch(getUserFakeApi())
  }, [])
  return (
    <div className="App">
      <Heder/>   
    </div>
  )
}

export default App
