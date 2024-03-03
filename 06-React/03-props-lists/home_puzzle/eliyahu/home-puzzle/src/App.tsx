import './App.scss'
import User from './components/User/User'
import { users } from '../ulti/users'


function App() {
  const aboveAge = (age: number) => {
    const usersAboveAge = users.filter((user) => user.age >= age)
    return usersAboveAge
  }
  let [age, setAge]=useState(0)

  const setAge = (newAge)=>{
    setAge(age=newAge)
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {aboveAge(age).map((user) => {
        return (
          <User key={user.id} id={user.id} name={user.name} username={user.username} phone={user.phone} age={user.age} website={user.website} email={user.email} />
        )
      })}
      <button onClick="setAge(29)"></button>
    </div>
  )
}

export default App
