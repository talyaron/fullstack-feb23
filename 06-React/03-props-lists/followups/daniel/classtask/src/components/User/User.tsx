// 1. create 3 user objects.
// create user card components that recieve these users as props. make sure to deal with empty fields.

import React,{FC, useState} from 'react'

interface UserCardProps {
      id: number,
      name: string | number,
      username: string | number,
      email: string | number,
      phone: string | number,
      website: string | number,
      age: number
      // users: User[];
}

// interface User {
//   name: string | number;
//   email: string;
// }

const User: FC<UserCardProps> = ({ id, name, username,email,phone, website,age}) => {
  const [userCard, setUserCard] = useState<UserCardProps | null>();
  return <div>
    {id} {name} {username} {email} {phone} {website} {age}
    </div>;
};

export default User;
