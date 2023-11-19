import React from 'react';
import Paragraph from './components/Paragraph';
import UserCard from './components/userCard/UserCard';
import users from './utility/User';
import './App.css';

function App() {
  return (
    <div className="App">
      {users.map((user)=>{
      const userWebsite = user.website ? user.website:"hildegard.org"
        return(
          <UserCard id={user.id} name={user.name} username={user.username} email={user.email} phone={user.phone} website={userWebsite} age={user.age}/>
        )
      })}
      <Paragraph color='pink'>pink</Paragraph>
    </div>
  );
} 

export default App;


//another way

// function App() {
//   return (
//     <div className="App">
//       {users.map((user)=>{
//         return(
//           <div>
//             <h1>{user.name}</h1>
//             <p>{user.username}</p>
//             <p>{user.email}</p>
//             <p>{user.phone}</p>
//             <p>{user.website}</p>
//             <p>{user.id}</p>
//             <p>{user.age}</p>
//           </div>
//         )
//       })}
//       <Paragraph color='pink'>ghchgc</Paragraph>
//     </div>
//   );
// } 

