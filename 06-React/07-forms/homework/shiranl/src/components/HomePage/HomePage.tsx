import React, { useEffect, useState } from 'react'
import './HomePage.scss'
import { getUser } from '../../api/usersAPI';

interface HomePageProps {
  userId:number;
  setIsposts: (isposts: boolean) => void;
}

const HomePage: React.FC<HomePageProps> =  ({userId,setIsposts}) => {
 
const [user, setUser] = useState<User>()  
const getUserById = async () => {
  try {
    const user:User = await getUser(userId)
    if(!user){
      console.log('user not found');
      return;
    }
    setUser(user)
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  getUserById()
},[userId])

const handleShowPostsClick = () => {
    setIsposts(true)
};

  return (
    <div className='home-page'>
        <div className='heder'>
        <>Hello {user?.username} {user?.lastName}</>
        <h2>Mindfulness with the environment</h2>

        </div>
        <div className='home-page-body'>
        </div>
        <div className='footer'>
            <button onClick={handleShowPostsClick}  >Show My Posts</button>
            <a  className='logout'>Log Out</a>
        </div> 
    </div>
  )
}

export default HomePage
function setIsposts(arg0: boolean) {
  throw new Error('Function not implemented.');
}

