import React from 'react';
import User from './components/User/User';
import './App.scss';

import { users } from './util/users';

function App() {
  return (
    <div className="App"> 
    
      <User name={users[0].name} username={users[0].username} email={users[0].email} phone={users[0].phone} website={users[0].website} age={users[0].age} >
        <p>Hi, I'm a child</p>
      </User>
      <User name={users[1].name} username={users[1].username} email={users[1].email} phone={users[1].phone} website={users[1].website} age={users[1].age} >
        <p>Hi, I'm Super child</p>
      </User>
    </div>
  );
}


export default App;
