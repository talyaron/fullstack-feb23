import Header from "../header/Header";
import Title from "./../title/Title";
import Paragraph from "./../paragraph/Paragraph";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  return (
    <div className="card">
      <h1>hello from card</h1>
      <Title />
      <Header />
      <Paragraph />
    </div>
  );
};

export default Card;