import React, { useContext } from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../context/cartProvider";

const CartDropdown = () => {
  const { cartState, dispatch } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartState.cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
