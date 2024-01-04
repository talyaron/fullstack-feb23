import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
import { userSelector } from '../../features/userSlice'

const Title = () => {
  const user = useAppSelector(userSelector)

  useEffect(() => {
    console.log("changed user")
  }, [user])
  return (
    <div>
      <p>this is a <title>title</title></p>

      <p>{user && user.name ? user?.name : null}</p>

    </div>
  )
}

export default Title
