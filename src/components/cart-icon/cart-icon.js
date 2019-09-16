import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartHidden } from "../../actions/cart.actions";
import { CartContext } from "../../context/cartProvider";

const CartIcon = () => {
  const { cartState, dispatch } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> 0</span>
    </div>
  );
};

export default CartIcon;
