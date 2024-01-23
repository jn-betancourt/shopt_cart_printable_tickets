import PrintableTemplate from "./PrintableTemplate";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../storage/CartContext";
import { ClientContext } from "../../storage/ClientContext";
import { Row, Button } from "react-bootstrap";

export default function TicketCard() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const client = useContext(ClientContext);
  const sendData = async () => {
    await fetch("http://localhost:8080/api/ticket", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cart.items),
    })
      .then(() => {
        cart.items.map((item) => {
          cart.deleteFromCart(item.id);
          client.removeClient();
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        client.removeClient();
        navigate("/");
      });
  };

  return (
    <Row className="justify-content-md-center">
      <PrintableTemplate products={cart} client={client} />
      <Button onClick={sendData}>Imprimir</Button>
    </Row>
  );
}
