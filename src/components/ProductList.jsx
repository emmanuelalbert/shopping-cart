import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  // Local state: which category is selected
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Build the category buttons from the data: ["All", "Electronics", "Fashion", "Home"]
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Decide which products to show
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Container className="my-4">
      <h2 className="mb-3">Products</h2>

      {/* Category filter buttons */}
      <div className="mb-4 d-flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={
              selectedCategory === category ? "primary" : "outline-primary"
            }
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;