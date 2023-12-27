
import "./App.css"
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Header from './component/Header';
import { getUserApi } from "./features/loggedUser/userAPI";
import { userSelector, userStateSelector } from "./features/loggedUser/userSlice";
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch() //when i want to activate some reducer/extraReducer (action) that i want it to work. this is the hook to use the dispatch
  const user = useAppSelector(userSelector) //use the hook "useAppSelector" to activate the selector that i defined
  const status = useAppSelector(userStateSelector) //we don't show the status usually to the user

  useEffect(() => {
    dispatch(getUserApi()) //activate the getUserApi() and get the user from api
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
