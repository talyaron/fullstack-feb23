// UserList.tsx
import React from 'react';
import SingleUser from './User'; // Import the renamed type

type UserListProps = {
  users: SingleUser[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <SingleUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
