import './App.scss'
import User from './components/User/User'
import { users } from '../ulti/users'
import { useState } from 'react'


function App() {

  const aboveAge = (age: number) => {
    const usersAboveAge = users.filter((user) => user.age >= age)
    return usersAboveAge
  }
  let [age, setAge] = useState(0)

  const chooseAge = () => {
    setAge(age = 29)
  }

  const resetAge = () => {
    setAge(age = 0)

  }
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <div>
        <div>
          <p>To show only users over 29 years old press here</p>
          <button onClick={chooseAge} >Show</button>
        </div>
        <div>
          <p>To show all users press here</p>
          <button onClick={resetAge} >Show</button>
        </div>
      </div>
      {aboveAge(age).map((user) => {
        return (
          <User key={user.id} id={user.id} name={user.name} username={user.username} phone={user.phone} age={user.age} website={user.website} email={user.email} />
        )
      })}
    </div>
  )
}

export default App
