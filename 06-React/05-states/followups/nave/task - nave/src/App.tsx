import { useState } from "react";
import "./App.css";
import { users } from "./util/users";
import UserCard from "./components/UserCard";

function App() {
  const [usersArr, setUsers] = useState<any[]>(users);
  
   
    
    const addOne = (userId:number) => {
      setUsers(usersArr.map((user) => {
        if (user.id === userId) {
          return {...user, counter: user.counter +1}
        } else {
          return user
        }
      }))
    }
    const removeOne = (userId:number) => {
      setUsers(usersArr.map((user) => {
        if (user.id === userId) {
          return {...user, counter: user.counter -1}
        } else {
          return user
        }
      }))
    }
    
  

  return (
    <div>
      {/* {imagesArr.map((image, idx) => {
        return (
          <div key={image.id}>
            {idx}
            <h5>{image.title}</h5>
            <img src={image.url} alt={image.title} />
            <button onClick={handleRemove} value={image.id}>DELETE</button>
            <button onClick={handleUpdate} value={image.id}>UPDATE</button>
          </div>
        );
      })} */}
      {usersArr.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            addOne={addOne}
            removeOne={removeOne}
          />
        );
      })}
    </div>
  );
}

export default App;

  // const handleRemove = (ev) => {
  //   // const newArr = imagesArr.filter((image) => {
  //   //   if (image.id == ev.target.value){
  //   //     return
  //   //   } else {
  //   //     return image
  //   //   }
  //   // })

  //   // setImages(newArr)

  //   setUsers(
  //     usersArr.filter((user) => {
  //       return user.id != ev.target.value;
  //     })
  //   );
  // };

  // const handleUpdate = (ev) => {
  //   const newTitle = prompt("Enter new Title");
  //   setUsers(
  //     usersArr.map((user) => {
  //       if (user.id == ev.target.value) {
  //         return { ...user, title: newTitle };
  //       } else {
  //         return user;
  //       }
  //     })
  //   );
  // };