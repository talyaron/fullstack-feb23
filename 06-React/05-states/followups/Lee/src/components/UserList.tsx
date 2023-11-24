import React from 'react';
import User from './User';


type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
