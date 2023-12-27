import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { useEffect } from "react"
import { getUserFakeApi } from "./features/user/getUser"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { userSelector } from "./features/user/userSlice"

function App() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(userSelector)
  useEffect(() => {
    dispatch(getUserFakeApi())
  }, [])
  return <h1>{user?.name}</h1>
}

export default App
