import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

export default function ProductForm() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
  });

  const onChangeNumber = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const onChangeTitle = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const saveItem = () => {
    console.log(product);
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
