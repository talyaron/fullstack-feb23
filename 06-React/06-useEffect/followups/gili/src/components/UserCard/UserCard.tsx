/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'

interface UserCardProps {
user: any
}

const UserCard:FC<UserCardProps> = ({user}) => {
    
  return (
    <div style={{border: "1px solid black"}}>
        <h2>{user.email}</h2>
        <h2>{user.name}</h2>
        <button>Get POSTS</button>
    </div>
  )
}

export default UserCard