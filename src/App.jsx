import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  // Read the total number of items directly from the store
  const totalItems = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      {/* NAVBAR: sticky="top" keeps it visible while scrolling */}
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Container>
          <Navbar.Brand href="#products">🛒 ShopEasy</Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              Cart{" "}
              <Badge bg="warning" text="dark" pill>
                {totalItems}
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* PRODUCTS section */}
      <div id="products" style={{ scrollMarginTop: "70px" }}>
        <ProductList />
      </div>

      {/* CART section */}
      <div id="cart" style={{ scrollMarginTop: "70px" }}>
        <Cart />
      </div>
    </>
  );
}

export default App;