import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/users", { headers: { "Content-Type": "application/json" } })
      const {data} = await axios.post("http://localhost:8000/api/users",{}, { headers: { "Content-Type": "multipart/form-data" } })
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">To About</Link>
      <button
        onClick={() => {
          navigate("/about", { state: { key: 3, id: "test" } });
        }}
      >
        To About Navigate
      </button>
      <Link to="/user-page/1">user 1</Link>
      <Link to="/user-page/2">user 2</Link>
      <Link to="/user-page/3">user 3</Link>
    </div>
  );
};

export default Home;
