import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>About</h3>
      <Link to="/">Go Home</Link>
      <p>click to logout:</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Log Out
      </button>
      <Link to="/user/1">1</Link>
      <Link to="/user/2">2</Link>
      <Link to="/user/3">3</Link>
    </div>
  );
};

export default About;
