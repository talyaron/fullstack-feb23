import React from "react";

interface Props {
  color: string;
  children: React.ReactNode;
}

const Title = ({ color, children }: Props) => {
  return (
    <>
      <h1 style={{ color }}>{children}</h1>
    </>
  );
};

export default Title;
