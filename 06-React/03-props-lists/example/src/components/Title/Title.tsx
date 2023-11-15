import React, { FC, useState } from "react";

interface TitleProps {
  header: string;
  // users: User[];
}

interface User {
  name: string | number;
  email: string;
}

const Title: FC<TitleProps> = ({ header }) => {
  const [account, setAccount] = useState<User | null>();
  return <h1>{header}</h1>;
};

export default Title;

export function TitleTitle({ header }: TitleProps) {
  return <div>Title</div>;
}
