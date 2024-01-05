import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import NewProduct from "../components/product_form/NewProduct";
import { useSelector } from "react-redux";

// [{... }, {... }, {... }]
function Store() {
  // tomamos los productos del contexto de redux
  const products = useSelector((state) => state.products);
  return (
    <>
      <h1 align="center" className="p-3">
        Beef Burguer Company!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => {
          return (
            <Col align="center" key={product.id}>
              <ProductCard product={product} />
            </Col>
          );
        })}
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
