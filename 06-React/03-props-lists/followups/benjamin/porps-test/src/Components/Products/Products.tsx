import React, { FC , useState } from "react";
import "./products.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface ProductProps {
  name: string;
  price: number;
  img: string;
  amount: number;
  addToCart: (price: number) => void;
  removeToCart: (price: number) => void;
}

const Products: FC<ProductProps> = ({ name, price, img, addToCart, removeToCart}) => {

  const [amount, setAmount] = useState(0);
  const addAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const romoveAmount = () => {
    if(amount > 0){
    setAmount((prevAmount) => prevAmount - 1);
    }
  };

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} ₪</Card.Text>
        <p>ammount: {amount}</p>
        <Button variant="primary" onClick={() => { addToCart(price); addAmount(); }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-plus"
            viewBox="0 0 16 16"
          >
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </Button>
        <Button variant="primary" onClick={() => { removeToCart(price); romoveAmount(); }}>
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
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Products;
