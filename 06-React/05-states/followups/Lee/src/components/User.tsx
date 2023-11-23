// Define a type for the user object
type User = {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
};

// User.tsx
import React from 'react';

// Use the defined User type for the user prop
const User: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <h3>ID: {user.id}</h3>
      <p>{user.icon}</p>

      {/* a ternary code to present the icon only when the condition is filled */}
      
    </div>
  );
};

export default User;
