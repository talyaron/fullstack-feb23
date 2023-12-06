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
    </div>
  );
};

export default About;
