import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
import { userSelector } from '../../features/userSlice'

const Header = () => {

    const user= useAppSelector(userSelector)

    useEffect(()=>{
        console.log("changed user")
    },[user])
  return (
    <div>
     <p> HEADER{user && user.name ? user?.name : null}</p>
    </div>
  )
}

export default Header
