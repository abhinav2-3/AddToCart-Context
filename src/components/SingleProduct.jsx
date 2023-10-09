import React, { useContext } from "react";
import { CartContext } from "./ContextAPI";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="product" key={prod.id}>
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: "700" }}>{prod.name}</span>
        <span>₹{prod.price.replace(/\.0+$/, "")}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
