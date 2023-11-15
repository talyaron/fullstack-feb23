import React, { useState } from "react";
import "./Counter.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [minus, setMinus] = useState(0);
  const [plus, setPlus] = useState(0);

  const addCount = () => {
    setCounter(counter + 2);
    setPlus(plus + 1);
  };
  const reduceCount = () => {
    if (counter > 0) setCounter(counter - 2);
    setMinus(minus + 1);
  };

  return (
    <div className="counter">
      <Card style={{ width: "18rem", gap: "10px" }}>
        <Card.Body>
          <Card.Title>Counter</Card.Title>
          <Button
            onClick={addCount}
            style={{ margin: "10px" }}
            variant="outline-primary"
            id="plus"
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>{" "}
            <Badge bg="success">{plus}</Badge>
          </Button>
          <Button
            onClick={reduceCount}
            style={{ margin: "10px" }}
            variant="outline-danger"
            id="minus"
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
            <Badge bg="danger">{minus}</Badge>
          </Button>
          <h3>count: {counter} </h3>
          <h6>plus btn clicked: {plus} times</h6>
          <h6>minus btn clicked: {minus} times</h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Counter;
