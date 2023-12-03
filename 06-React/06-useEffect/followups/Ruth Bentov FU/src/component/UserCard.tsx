import React, { FC } from 'react'

interface UserCardProps{
    user:User,
    userClicked: (id:number)=>void
}

const UserCard:FC<UserCardProps> = ({user , userClicked}) => {

  return (
    <div className='userCardDiv' onClick={()=>{userClicked(user.id)}}>
      <h3>name: {user.name}</h3>
      <p>user name: {user.username}</p>
      <p>email: {user.email}</p>
      <p>address: {user.address.street + ", "+ user.address.city+ ", " + user.address.suite}</p>
    </div>
  )
}

export default UserCard