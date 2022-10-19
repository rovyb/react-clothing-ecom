import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import React from "react";

export const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={toggleIsCartOpen}>Go To Checkout</Button>
      </Link>
    </div>
  );
};
