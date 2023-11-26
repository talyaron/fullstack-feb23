import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  const [showHighlyRated, setShowHighlyRated] = useState(false);

  const toggleFilter = () => {
    setShowHighlyRated(!showHighlyRated);
  };

  const filteredItems = showHighlyRated
    ? storeItems.filter((item) => item.rating > 4)
    : storeItems;

  return (
    <>
      <h1>Store</h1>
   
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <Row className="mb-3 justify-content-end">
        <Col>
          <Button className="btn btn-primary text-right my-3" onClick={toggleFilter}>
            {showHighlyRated ? "Show All Products" : "Highest Rated Products"}
          </Button>
        </Col>
      </Row>
    </>
  );
}
