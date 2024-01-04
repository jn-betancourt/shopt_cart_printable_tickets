import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ProductForm from "./ProductForm";

export default function NewProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="p-3" onClick={handleShow}>
        Nuevo +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm close={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
