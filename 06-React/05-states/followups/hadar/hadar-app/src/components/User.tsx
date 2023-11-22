import React, { useState } from "react";

interface User {
  name: string;
  lastname: string;
  id: number;
  counter: number;
}



const Card: FC<User> = ({ name, lastname, id, counter }) => {
  <div>
    <h1>{name}{lastname}</h1>
    <h2>{id}</h2>
    <h3>{counter}</h3>
  </div>;
};
