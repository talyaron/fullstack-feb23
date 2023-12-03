import React, { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { CardText } from "react-bootstrap";

interface UserProps {
  id: number;
  name: string;
  lastName: string;
  emoji?: string
}

const User: FC<UserProps> = ({ id, name, lastName, emoji }) => {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState("none");
  const [clicks, setClicks] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
    cardClick();
  };
  const reduceCounter = () => {
    if (counter > 0) setCounter(counter - 1);
    cardClick();
  };
  function getRandomColor(): string {
    const colors: string[] = [
      "red",
      "green",
      "blue",
      "yellow",
      "pink",
      "purple",
      "orange",
      "cyan",
      "magenta",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  const cardClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks % 5 === 0) {
      const randomColor = getRandomColor();
      setBgColor(randomColor);
    }
  };
  const counterDivide = () => {
    if(counter%10 === 0){
        return true
    }
    else{
        return false
    }
  }

  return (
    <div>
      <Card className="user" style={{ width: "18rem", backgroundColor: bgColor }}>
        <Card.Body>
            <CardText>{counterDivide() ? <p>{emoji}</p> : null }</CardText>
          <Card.Title>
            {name} {lastName}
          </Card.Title>

          <Button onClick={reduceCounter} variant="primary">
            -
          </Button>
          <Button onClick={addCounter} variant="primary">
            +
          </Button>
          <Badge bg="secondary">{counter}</Badge>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
