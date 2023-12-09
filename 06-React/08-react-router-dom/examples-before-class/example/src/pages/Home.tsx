import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <h3>Home</h3>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
