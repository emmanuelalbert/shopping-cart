import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

// "product" is a prop: the parent passes one product object in
function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Runs when the button is clicked
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted">{product.category}</Card.Text>
        <Card.Text className="fw-bold fs-5">₹{product.price}</Card.Text>

        {/* mt-auto pushes the button to the bottom of the card */}
        <Button variant="primary" className="mt-auto" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;