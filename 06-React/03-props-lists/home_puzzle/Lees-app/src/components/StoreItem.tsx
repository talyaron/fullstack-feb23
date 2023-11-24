import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useStore } from '../context/StoreContext.tsx'; // Import the correct context

export function StoreItem({
  id,
  name,
  price,
  rating,
  imgUrl,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    addToStore,
  } = useShoppingCart();

  const { addToStore, removeFromStore } = useStore(); // Update the import

  const quantity = getItemQuantity(id);

  return (
    <Card>
      {/* ... (existing code) */}

      <div className="mt-auto">
        {quantity === 0 ? (
          <Button
            className="w-100"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: '.5rem' }}
          >
            <div
              className="d-flex align-item-center justify-content-center"
              style={{ gap: '.5rem' }}
            >
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              <div>
                <span className="fs-3">{quantity}</span> In Cart
              </div>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            </div>
            <Button
              onClick={() => removeFromCart(id)}
              variant="danger"
              size="sm"
            >
              Remove
            </Button>

            {/* Add the Remove from Store Button */}
            <Button
              onClick={() => removeFromStore(id)}
              variant="danger"
              size="sm"
            >
              Remove from Store
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
Update StoreItemList to Display Products and Remove from Store:

jsx
Copy code
// ... (existing imports)

export const StoreItemList = () => {
  const { storeItems, addToStore, removeFromStore } = useStore();

  return (
    <>
      {/* Render your StoreItem components here */}
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}

      {/* "Add to Store" button outside the loop */}
      <Button onClick={() => addToStore(/* Provide default values or empty object */)}>
        Add to Store
      </Button>

      {/* Display Remove from Store buttons */}
      {storeItems.map((item) => (
        <Button
          key={`remove-${item.id}`}
          onClick={() => removeFromStore(item.id)}
          variant="danger"
          size="sm"
        >
          Remove from Store: {item.name}
        </Button>
      ))}
    </>
  );
};
