import React, {FC} from 'react'
import { UserType } from '../types/userInterface'

interface NavbarProps{
    user: UserType
}
 


const Navbar:FC<NavbarProps> = ({user}) => {
  return (
    <div>
        <h1>{user.name }</h1>
    </div>
  )
}

export default Navbar