import { NavLink } from "react-router-dom";
import Home from "../home/Home";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Card = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Card</h1>
            <h2>Hello from CARD {user?.name}</h2>
            <NavLink to="/minicard">Mini Card</NavLink>
            <NavLink to="/">Home</NavLink>
           
            
          
        </div>
    );
};

export default Card;
