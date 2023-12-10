import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
