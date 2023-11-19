import React, { FC, useState } from "react";

interface UserProps {
 name:string;
 email:string;
 children?: React.ReactNode
}



const User: FC<UserProps> = ({ name }) => {
  const [account, setAccount] = useState<UserProps | null>();
  return <h1>{name}</h1>;
};

export default User;



