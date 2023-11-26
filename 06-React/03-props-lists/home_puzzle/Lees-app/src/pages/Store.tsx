import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
// import { useStore } from "../context/StoreContext.tsx"
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

export function Store() {
  // const { deleteFromStore } = useStore();
  // const [showHighlyRated, setShowHighlyRated] = useState(false);
  const { storeItems, addToStore, deleteFromStore } = useContext(StoreContext);

  // const toggleFilter = () => {
  //   setShowHighlyRated(!showHighlyRated);
  // };

  // const filteredItems = showHighlyRated
  //   ? storeItems.filter((item) => item.rating > 4)
  //   : storeItems;

  // const handleDeleteFromStore = (id: number) => {
  //   // Implement logic to delete the product from the store
  //   // deleteFromStore(id);
  // };

  // {
  //   "id": 1,
  //   "name": "The Book of Kells",
  //   "price": 44.40,
  //   "rating": 2.30,
  //   "imgUrl": "/imgs/book.jpg"
  // },

  const handleAddProduct = (ev) => {
    ev.preventDefault()
    addToStore({
      id: new Date().getTime(),
      name: "The Book of Kells gili",
      price: 44.4,
      rating: 2.3,
      imgUrl: "/imgs/book.jpg",
    });
  };

  return (
    <>
      <h1>Store</h1>
      <p>Test</p>
      <form>
        <input type="text" placeholder="name" />
        <input type="number" placeholder="price" />
        <input type="number" placeholder="rating" />
        <input type="text" placeholder="img" />
        <button onClick={handleAddProduct} type="submit">
          ADD
        </button>
      </form>
      {/* <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} onDelete={handleDeleteFromStore} />
          </Col>
        ))}
      </Row> */}
    </>
  );
}
