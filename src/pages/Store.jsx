import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";
import NewProduct from "../components/product_form/NewProduct";

// [{... }, {... }, {... }]
function Store() {
  return (
    <>
      <h1 align="center" className="p-3">
        Beef Burguer Company!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col align="center" className="p-3">
          <NewProduct />
        </Col>
      </Row>
    </>
  );
}

export default Store;
