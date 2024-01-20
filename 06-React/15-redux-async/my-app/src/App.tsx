/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Header from "./components/header/Header"
import Title from "./components/title/Title"
import { getUserFakeApi, loginUser } from "./features/loggedInUser/userAPI"
import {
  userSelector,
  userStatusSelector,
} from "./features/loggedInUser/userSlice"

function App() {
  const dispatch = useAppDispatch()
  const [counter, setCounter] = useState(10)

  const user = useAppSelector(userSelector)
  const status = useAppSelector(userStatusSelector)

  useEffect(() => {
    dispatch(getUserFakeApi())
  }, [])

  const handleLogin = async (username = "kminchelle", password = "0lelplR") => {
    try {
      const loginData = { username, password }
      const response = await dispatch(loginUser(loginData))
      console.log("Login successful:", response.payload)
      // Handle successful login, update UI, etc.
    } catch (error) {
      console.error("Login failed:", error)
      // Handle login error, show error message, etc.
    }
  }

  return (
    <div className="App">
      <p>{status}</p>
      {user?.name}
      <Header />
      <Title title="שלום" />
      <button onClick={() => { handleLogin() }}>LOGIN</button>
    </div>
  )
}

export default App
