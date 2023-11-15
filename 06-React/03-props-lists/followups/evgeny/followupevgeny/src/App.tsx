import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {users} from './assets/users/users.ts'
import './App.css'
import UserCard from './components/userCard';

function App() {
  
  let id=users[0].id
  let name =users[0].name
  let username = users[0].username
  let email=users[0].email
  let phone=users[0].phone
  let website=users[0].website
  let age:number=users[0].age
 
  return (
    <>
    <div>
      <UserCard id={id} name={name} username={username}/>
      <UserCard users={id,name,username,email,phone,website,age}/>
      <UserCard id={id}/>
      <UserCard email={email}/>
      <UserCard phone={phone}/>

    </div>
    </>
  )
}

export default App
