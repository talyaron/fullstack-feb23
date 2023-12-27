import { useEffect } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Header from "./components/header/Header"
import Title from "./components/title/Title"
import { getUserFakeApi } from "./features/loggedInUser/userAPI"
import { userSelector, userStatusSelector } from "./features/loggedInUser/userSlice"

function App() {
  const dispatch = useAppDispatch()

  const user = useAppSelector(userSelector)
  const status = useAppSelector(userStatusSelector)

  useEffect(() => {
    dispatch(getUserFakeApi())
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
