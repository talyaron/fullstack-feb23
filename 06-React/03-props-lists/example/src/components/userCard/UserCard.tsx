import React, { FC } from 'react'

interface UserCardProps {
    email: string,
    username: string
}

const UserCard:FC<UserCardProps> = ({email, username}) => {
  return (
    <div style={{border: "1px solid black"}}>
        <h1>{username}</h1>
        <p>{email}</p>
    </div>
  )
}

export default UserCard