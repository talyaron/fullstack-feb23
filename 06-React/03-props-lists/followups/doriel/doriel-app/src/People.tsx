import React from "react";

interface UserProps {
  first: string;
  age: number;
  hobbie: string;
  children: React.ReactNode
  
}

const People = ({ first, age, hobbie, children }: UserProps) => {
  return (
    <>
      {children}
      <h1>{first}</h1>
      <h2>{age}</h2>
      <h3>{hobbie}</h3>
      {children}
    </>
  );
};

export default People;
