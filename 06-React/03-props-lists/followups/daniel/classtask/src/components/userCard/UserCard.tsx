// 1. create 3 user objects.
// create user card components that recieve these users as props. make sure to deal with empty fields.

import React,{FC} from 'react'

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

const UserCard: FC<UserCardProps> = ({ id, name, username,email,phone, website,age}) => {
  // const [userCard, setUserCard] = useState<UserCardProps | null>();
  return <div>
    <p>{id}</p>
    <p>{name}</p>
    <p>{username}</p>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{website}</p>
    <p>{age}</p>
    </div>;
};

export default UserCard;
