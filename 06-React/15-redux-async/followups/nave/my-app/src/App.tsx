import { useEffect } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Header from "./components/header/Header"
import Title from "./components/title/Title"
import { userSelector, userStatusSelector } from "./features/loggedInUser/userSlice"
import { getUserApi } from "./features/loggedInUser/userApi"

function App() {
  const dispatch = useAppDispatch()

  const user = useAppSelector(userSelector)
  const status = useAppSelector(userStatusSelector)

  useEffect(() => {
    dispatch(getUserApi())
  }, [])

  return (
    <div className="App">
      <p>
        {status}
      </p>
      {user?.name}
      <Header />
      <Title title="שלום" />
    </div>
  )
}

export default App
