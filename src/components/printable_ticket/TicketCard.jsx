import PrintableTemplate from "./PrintableTemplate";
import { useContext } from "react";
import { CartContext } from "../../storage/CartContext";
import { Row, Button } from "react-bootstrap";

export default function TicketCard() {
  const cart = useContext(CartContext);
  const sendData = async () => {
    await fetch("http://localhost:8080/api/ticket", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cart.items),
    })
      .then(() => {
        cart.items.map((item) => {
          cart.deleteFromCart(item.id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="justify-content-md-center">
      <PrintableTemplate products={cart} />
      <Button onClick={sendData}>Imprimir</Button>
    </Row>
  );
}
