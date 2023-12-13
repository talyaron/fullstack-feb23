import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { check } from "../api/checkApi";

const Home = () => {
  const handleCheck = async () => {
    try {
      const data = await check();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, earum
        illum numquam praesentium corrupti maiores voluptates a sapiente!
        Distinctio expedita inventore rem voluptate architecto ratione non
        libero voluptatum veniam ipsam?
      </p>
      <button onClick={handleCheck}>Check</button>
    </div>
  );
};

export default Home;
