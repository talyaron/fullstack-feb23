import { useState } from "react";
import "./App.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import User from "./Components/User/User";
import Products from "./Components/Products/Products";
import { productsList } from "./util/ProductsList";
import Offcanvas from "react-bootstrap/Offcanvas";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formAppear, setFormAppear] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [productsDisplay, setProductsDisplay] = useState("none");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCart = (price: number) => {
    setCartTotal((prevCartTotal) => prevCartTotal + price);
  };

  const removeToCart = (price: number) => {
    setCartTotal((prevCartTotal) => prevCartTotal - price);
  };

  const handleForm: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    setName(formData.get("name") as string);
    setEmail(formData.get("email") as string);
    if (name && email) {
      setFormAppear(false); // Hide form
      setProductsDisplay("grid"); // Show products
    }
  };
  // function addPrice(price:number){
  //   console.log(price)
  // }

  return (
    <>
      <Form
        style={{ display: formAppear ? "block" : "none" }}
        onSubmit={handleForm}
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            name="name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <User className="user" key={email} name={name} email={email} />
      <div style={{display: productsDisplay}} className="products">
        {productsList.map((product) => (
          <Products
            key={product.name}
            name={product.name}
            price={product.price}
            img={product.img}
            addToCart={addToCart} // Passing the function
            removeToCart={removeToCart} // Passing the function
          />
        ))}
        <h2>Cart Total: {cartTotal}₪</h2>
        <button className="sub" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-cart shop"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cartTotal} ₪
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default App;
