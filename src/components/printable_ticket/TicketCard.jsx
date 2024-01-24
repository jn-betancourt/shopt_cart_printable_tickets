import PrintableTemplate from "./PrintableTemplate";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../storage/CartContext";
import { ClientContext } from "../../storage/ClientContext";
import { Row, Button } from "react-bootstrap";

import { postTicket, postTicketToGo } from "../../api/ticket_api/ticketApi";

export default function TicketCard() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const client = useContext(ClientContext);
  const sendData = async () => {
    if (!client.client.hasClient) {
      postTicket(cart.items)
        .then(() => {
          client.removeClient();
          cart.items.map((item) => {
            cart.deleteFromCart(item.id);
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error);
          client.removeClient();
          navigate("/");
        });
    } else {
      postTicketToGo(cart.items, client.client)
      .then(() => {
        client.removeClient();
        cart.items.map((item) => {
          cart.deleteFromCart(item.id);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
          client.removeClient();
          navigate("/");
      });
    }
  };

  return (
    <Row className="justify-content-md-center">
      <PrintableTemplate products={cart} client={client} />
      <Button onClick={sendData}>Imprimir</Button>
    </Row>
  );
}
