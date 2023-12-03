import React, { FC } from "react";
import Card from "react-bootstrap/Card";

interface company {
  name: string;
  catchPhrase: string;
}

interface UserProps {
  company: company;
  id: number;
  username: string;
  activateUser: () => void
  isActive: boolean;
}

const User: FC<UserProps> = ({ company, id, username, activateUser, isActive }) => {
  const cardClass = isActive ? "active-user" : "";

  return (
    <div className="user antialiased hover:scale-110 cursor-pointer" onClick={() => activateUser(id)}>
      <Card className={` hover:bg-cyan-100 ${cardClass}`} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="usersWrapper__user">{username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {company.name}
          </Card.Subtitle>
          <Card.Text className="usersWrapper__phrase italic text-blue-400">
            "{company.catchPhrase}"
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};


export default User;
