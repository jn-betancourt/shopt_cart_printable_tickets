/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";

export default function PrintableTemplate(props) {
  const products = props.products.items;
  const client = props.client.client;
  const total = props.products.getTotalCost();
  return (
    <>
      <Row id="ticket">
        <h3>Beef Burguer</h3>
        {client.hasClient ? (
          <Col xs lg="2">
            <Row>cliente: {client.name}</Row>
            <Row>numero: {client.phone}</Row>
            <Row>direccion: {client.address}</Row>
            <Row>costo de envio: {client.sendCost}</Row>
          </Col>
        ) : (
          <></>
        )}

        {products.map((item) => {
          const title = item.title;
          const price = item.price.toString();

          return (
            <Row>
              <Col xs lg="2">
                {title}
              </Col>
              <Col md="auto">x{item.quantity}</Col>
              <Col xs lg="2">
                {price * item.quantity}
              </Col>
            </Row>
          );
        })}
        <Col xs lg="2">
          Total
        </Col>
        <Col xs lg="2">
          {total}
        </Col>
      </Row>
    </>
  );
}
