import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <Link to="/">to home</Link>
      <button
        onClick={() => {
          navigate("/HomePage", { state: { key: 3, id: "test" } });
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
