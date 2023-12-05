
import './App.css'
import WindowSize from './components/windowSize/WindowSize'
import CountdownTimer from './components/countdownTimer/CountdownTimer'
import TitleTask from './components/titleTask/TitleTask';
import Practice from './components/practice/Practice';
import { useEffect, useState } from 'react';

// # advanced

// 1. Create a UserCard component that fetches data from JSONPlaceholder API (https://jsonplaceholder.typicode.com/). show the users in app.tsx.

// 2. create UserPosts component that fetches and displays a list of posts for a given user ID using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/). Add this component to each user card, and only show it after that user card has been clicked. show this component only when the user card is clicked.

// # Expactions

// 1.  Each of the components should only fetch data when it mounts.



function App() {
  const [users, setUsers] = useState([]);

  const fetchUserData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      return response.json()
    })
    .then(data => {
      setUsers(data)
    })
  }

  useEffect(()=>{
    fetchUserData()
  },[])
 
  return (
    <>
    {/* < TitleTask />
    <br />
    <br />
    <br />
    < CountdownTimer />
    <br />
    <br />
    <br />
    <WindowSize /> */}

    <Practice/>
    <WindowSize />
    <div>
      <ul>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </ul>
    </div>
    </>
  )
}




export default App





















// function App() {
//   const [title, setTitle] = useState("Hello user")
//   const [counter, setCounter] = useState(0)

//   useEffect(() => {
//     document.title = `${title}`
//     console.log("Hello Doriel")
//   }, [counter])

 
//   useEffect(() => {
//     console.log("on Mount")
//     setCounter((prev) => prev + 1)
//     document.title += {prev}
//   }, [setTitle])

//   return (
//     <>
      
//       {/* <input value={title} onInput={(ev) => { setTitle((ev.target as HTMLInputElement).value) }} /> */}
//       <button onClick={() => {setCounter(counter + 1)}}>+</button>
//     </>
//   )
// }

// export default App
