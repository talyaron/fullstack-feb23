import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, rating, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="235px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
  <Card.Title className="mb-2 d-flex justify-content-between">
    <span className="fs-2">{name}</span>
    <span className="text-muted">{formatCurrency(price)}</span>
  </Card.Title>

  {typeof rating === "number" && (
    <div className="mb-2 text-end">
      <span>{`Rating: ${rating.toFixed(1)}`}</span>
    </div>
  )}

  <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-item-center justify-content-center"
                style={{ gap: ".5rem" }}
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
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
