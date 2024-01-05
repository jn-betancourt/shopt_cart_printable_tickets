import Button from "react-bootstrap/Button";
import { CartContext } from "../storage/CartContext";
import { useContext } from "react";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = cart.items.find((item) => (item ? item.id == id : null));

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
