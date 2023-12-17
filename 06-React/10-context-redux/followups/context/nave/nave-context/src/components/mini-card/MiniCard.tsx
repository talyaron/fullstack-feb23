
import { useContext } from 'react';
import Container from '../container';


const Header = () => {

  const {user} = useContext(UserContext)
 
  return (
    <div className="header">
      <h3>hello from header to user {user ? user.name :  null}</h3>
      <Container />
    </div>
  );
};

export default Header;
