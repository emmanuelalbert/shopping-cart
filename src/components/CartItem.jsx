import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <Row className="align-items-center border-bottom py-3">
      <Col xs={3} md={2}>
        <img src={item.image} alt={item.name} className="img-fluid rounded" />
      </Col>

      <Col xs={9} md={4}>
        <h6 className="mb-1">{item.name}</h6>
        <small className="text-muted">₹{item.price} each</small>
      </Col>

      <Col xs={6} md={3} className="mt-2 mt-md-0">
        <ButtonGroup size="sm">
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity === 1}
          >
            −
          </Button>
          <Button variant="light" disabled>
            {item.quantity}
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </Button>
        </ButtonGroup>
      </Col>

      <Col xs={6} md={3} className="text-end mt-2 mt-md-0">
        <div className="fw-bold">₹{item.price * item.quantity}</div>
        <Button
          variant="link"
          size="sm"
          className="text-danger p-0"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;