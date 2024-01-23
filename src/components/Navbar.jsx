import { Button, Navbar, Modal, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../storage/CartContext";
import CartProduct from "./CartProduct";
import ClientForm from "./client_form/ClientForm";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const [show, setShow] = useState({
    show: false,
    hasClient: false,
  });
  const handleClose = () => setShow({ ...show, show: false });
  const handleShow = () => setShow({ ...show, show: true });

  const hasClient = (e) => {
    setShow({
      ...show,
      hasClient: e.target.checked,
    });
  };

  const checkOut = () => {
    handleClose();
    navigate("ticket");
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Form>
                <Form.Group>
                  <Form.Check
                    id="isDomicilio"
                    type="checkbox"
                    label="¿Es domicilio?"
                    onChange={hasClient}
                  />
                </Form.Group>
                {show.hasClient ? <ClientForm></ClientForm> : null}
              </Form>
              <Button variant="success" onClick={checkOut}>
                Crear factura!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
