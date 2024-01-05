import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../storage/reducers/productSlice";

import { v4 as uuid } from "uuid";

export default function ProductForm(props) {
  const products = useSelector((state) => {
    state.products;
  });
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: "p" + uuid(),
    title: "",
    price: 0,
  });

  const onChangeNumber = (e) => {
    setProduct({ ...product, [e.target.id]: parseFloat(e.target.value) });
  };

  const onChangeTitle = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const saveItem = () => {
    dispatch(createProduct(product));
    // eslint-disable-next-line react/prop-types
    props.close();
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="input"
            placeholder="Nombre del producto"
            onChange={onChangeTitle}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio del item"
            onChange={onChangeNumber}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Row>
          <Col align="center">
            <Button variant="success" size="lg" onClick={saveItem}>
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
