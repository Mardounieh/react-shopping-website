import { useContext, useRef } from "react";
import { limitText } from "./limitText";
import { ShopContext } from "../context/shopeContext";

export const Product = (props) => {
  const { id, title, price, category, description, image } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const isInCart = cartItems?.some((item) => item.id === id)
  return (
    <div className="col-3 p-4">
      <img src={image} alt={category} className="w-100" />
      <h5>{title}</h5>
      <p title={description}>
        {limitText(description, 5)}{" "}
        <span className="border rounded border-success p-1 text-success">
          {price}$
        </span>
      </p>
      <button className="btn btn-dark btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCart && <button
        className="btn btn-dark btn-sm"
        onClick={() => removeFromCart(id)}
      >
        -
      </button>}
    </div>
  );
};
