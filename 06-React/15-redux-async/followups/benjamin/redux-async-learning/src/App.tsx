import { useEffect } from 'react'
import './App.css'
import {useAppDispatch, useAppSelector} from "../app/hooks"
import { getUserFakeApi } from '../features/loggedInUser/userAPI'
import { userSelector, userStatusSelector } from '../features/loggedInUser/userSlice'


function App() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector)
  const status = useAppSelector(userStatusSelector)
  console.log(user)

  const changeDispacth = (ev: React.FormEvent<HTMLInputElement>) => {
    const newDispatch = ev;
    console.log(newDispatch)

  }

  useEffect(() => {
    dispatch(getUserFakeApi())
  },[])

  return (
    <>
    <div>
      <p>HELLO!</p>
    </div>
     <div>
      <p>
        {status}
      </p>
     </div>
     <div>
      <p>{user?.name}</p>
     </div>
     <input type="text" onInput={(ev) => changeDispacth(ev)} />
    </>
  )
}

export default App
