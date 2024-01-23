import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { ClientContext } from "../../storage/ClientContext";

export default function ClientForm() {
  const clientState = useContext(ClientContext);
  const [state, setState] = useState({
    name: "",
    phone: "",
    address: "",
    sendCost: 0,
    hasClient: true,
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
    console.log(state)
  };

  const onSubmit = () => {
    clientState.addClient(state);
  };

  return (
    // <Form>
    <>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={onChange}
            id="name"
            type="text"
            placeholder="Nombre del cliente"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            onChange={onChange}
            id="address"
            type="text"
            placeholder="direccion"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero de conctacto</Form.Label>
          <Form.Control
            onChange={onChange}
            id="phone"
            type="text"
            placeholder="numero"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>costo de envio</Form.Label>
          <Form.Control
            onChange={onChange}
            id="sendCost"
            type="number"
            placeholder="Costo"
          />
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}>
          Guardar para facturar
        </Button>
      </>
    // </Form>
  );
}
