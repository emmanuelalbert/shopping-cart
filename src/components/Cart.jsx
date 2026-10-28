import { Container, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const dispatch = useDispatch();

  // READ the cart from the store
  const cartItems = useSelector((state) => state.cart);

  // DERIVED data: calculated from cartItems
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Empty cart: show a friendly message instead
  if (cartItems.length === 0) {
    return (
      <Container className="my-4">
        <h2 className="mb-4">Your Cart</h2>
        <p className="text-muted">Your cart is empty. Add something above!</p>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="mb-4">Your Cart</h2>

      {/* One CartItem per product in the cart */}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* Cart summary */}
      <Card className="mt-4 shadow-sm">
        <Card.Body>
          <Card.Title>Cart Summary</Card.Title>
          <div className="d-flex justify-content-between">
            <span>Total items</span>
            <strong>{totalItems}</strong>
          </div>
          <div className="d-flex justify-content-between fs-5 mt-2">
            <span>Total price</span>
            <strong>₹{totalPrice}</strong>
          </div>
          <Button
            variant="outline-danger"
            className="mt-3"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cart;