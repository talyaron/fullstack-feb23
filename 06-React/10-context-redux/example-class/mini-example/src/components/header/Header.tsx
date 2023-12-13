import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import Paragraph from './../paragraph/Paragraph';
import { UserContext } from "../../contexts/userContext";



const Header = () => {

  const {user} = useContext(UserContext)
 
  return (
    <div className="header">
      <h3>hello from header to user {user ? user.name :  null}</h3>
      <Paragraph />
    </div>
  );
};

export default Header;
