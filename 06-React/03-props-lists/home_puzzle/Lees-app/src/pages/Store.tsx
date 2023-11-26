import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useStore } from "../context/StoreContext.tsx"

export function Store() {
<<<<<<< Updated upstream
=======
  const { deleteFromStore } = useStore(); 
  const [showHighlyRated, setShowHighlyRated] = useState(false);

  const toggleFilter = () => {
    setShowHighlyRated(!showHighlyRated);
  };

  const filteredItems = showHighlyRated
    ? storeItems.filter((item) => item.rating > 4)
    : storeItems;

    const handleDeleteFromStore = (id: number) => {
      // Implement logic to delete the product from the store
      deleteFromStore(id);
    };

>>>>>>> Stashed changes
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} onDelete={handleDeleteFromStore} />
          </Col>
        ))}
      </Row>
    </>
  )
}
