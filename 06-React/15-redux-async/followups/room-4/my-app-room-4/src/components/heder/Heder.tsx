import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { userSelector } from '../../features/loggedInUser/userSlice'

const Heder = () => {

  const user = useAppSelector(userSelector)

  return (
    <div>
      <h1>hello {user ? user.name: null}</h1>
    </div>
  )
}

export default Heder
