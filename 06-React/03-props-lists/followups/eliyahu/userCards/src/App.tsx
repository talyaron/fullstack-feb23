import './App.scss'
import User from './components/User/User'
import { users } from '../ulti/users'


function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap:'20px'}}>
      {users.map((user) => {
        return (
          <User key={user.id} id={user.id} name={user.name} username={user.username} phone={user.phone} age={user.age} website={user.website} email={user.email} />
        )
      })}
    </div>
  )
}

export default App
