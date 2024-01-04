import { useEffect, useState } from 'react'

import './App.css'

import { useAppDispatch, useAppSelector } from './app/hooks';
import { userSelector, userStatusSelector } from './features/userSlice';
import { getUserFakeApi } from './features/userAPI';
import Header from './components/Header/Header';
import Title from './components/Title/Title';

function App() {

  const dispatch = useAppDispatch()
  const user = useAppSelector(userSelector)
  const status = useAppSelector(userStatusSelector)

  useEffect(() => {
    dispatch(getUserFakeApi())
  }, [])

  return (
    <>
      <div className='app'>
        <p>{status}</p>
        <p>{user && user.name ? user?.name : null}</p>
        <Header />
        <Title />

      </div>
    </>
  )
}

export default App
