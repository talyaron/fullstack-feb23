// App.js

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { users as usersData } from './util/users';
import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [usersArr, setUsersList] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState<{ id: number; firstName: string; lastName: string; counter: number; } | null>(null);
  const handleUserClick = (userId: number) => {
    const selectedUser = usersArr.find((user) => user.id === userId);
    setSelectedUser(selectedUser || null);
  };

  const addOneToCounter = (userId: number) => {
    setUsersList((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, counter: user.counter + 1 } : user
      )
    );
  };

  const removeOneFromCounter = (userId: number) => {
    setUsersList((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId && user.counter > 0
          ? { ...user, counter: user.counter - 1 }
          : user
      )
    );
  };

  return (
    <>
    <div className="container">
      <div className="navbar">
      <Navbar navName={selectedUser ? `${selectedUser.firstName} ${selectedUser.lastName}` : 'My App'} />
      </div>
    <div className='usersList'>
      {usersArr.map((user) => (
        <User
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          counter={user.counter}
          addOneToCounter={() => addOneToCounter(user.id)}
          removeOneFromCounter={() => removeOneFromCounter(user.id)}
          onClick={() => handleUserClick(user.id)}
        />
      ))}
    </div>
    </div>
      
    </>
  );
}

export default App;
