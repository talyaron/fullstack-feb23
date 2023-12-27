import { useEffect } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Header from "./components/Header"
import Title from "./components/Title"
import { userSelector, userStatusSelector } from "./features/loggedInUser/userSlice"
import { getUserFakeApi } from "./features/loggedInUser/userApi"

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
      {/* {user?.name} */}
      <Header />
      <Title title="`title by props`" />
    </div>
  )
}

export default App
