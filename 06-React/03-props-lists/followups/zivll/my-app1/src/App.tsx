import React from 'react';
import './App.scss';
import User from './components/User/User';
import { users } from './components/User/users';
import { Card } from './components/card/CardUser';


function App() {
  return (
    <div className="App">
      <div className="cards">
        {users.map((user) => {
          return <Card key={user.email} email={user.email} userName={user.username} />;
        })}     </div>

    </div>



  );
}

export default App;

{/* <div className="cards">
        <User id={Math.random().toString(36).substr(2, 9)} name={'Ziv'} userName={'zivll'} email={'zivll1991@gmail.com'} phone={'0543172207'} website={'ziv.co.il'} age={32} />

        <User id={Math.random().toString(36).substr(2, 9)} name={'Moshe'} userName={'Moshead'} email={'Moshead@gmail.com'} phone={'0543171549'} website={'Moshe.co.il'} age={32} />

        <User id={Math.random().toString(36).substr(2, 9)} name={'Dina'} userName={'Dinabe'} email={'Dina@gmail.com'} phone={'0543175469'} website={'Dina.co.il'} age={32} />
        <User id={users[0].id} name={users[0].name} userName={'Dinabe'} email={'Dina@gmail.com'} phone={'0543175469'} website={'Dina.co.il'} age={32} />

      </div> */}