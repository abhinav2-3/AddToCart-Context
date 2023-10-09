import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./ContextAPI";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Cart <span style={{ color: "red" }}>({cart.length})</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
