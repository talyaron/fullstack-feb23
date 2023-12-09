import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import LogIn from './components/LogIn/LogIn'
import HomePage from './components/HomePage/HomePage'
import UserPosts from './components/UserPosts/UserPosts'

function App() {
  const [user, setUser] = useState<User>()
  const [isposts, setIsposts] = useState(false);


  return (
    <>
      <div className='main'>

        {isposts ?<UserPosts setIsposts={setIsposts} userId={user?.id!}/> :
        user ? <HomePage userId={user.id} setIsposts={setIsposts}/> :
         <LogIn username="" password="" setUser={setUser}/>
        }
        
      </div>
    </>
  )
}

export default App
