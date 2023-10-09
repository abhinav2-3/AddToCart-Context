import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./ContextAPI";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <h1>Cart.</h1>
      <br />
      <span>Total Rs.{total}</span>
      <hr />
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Cart;
