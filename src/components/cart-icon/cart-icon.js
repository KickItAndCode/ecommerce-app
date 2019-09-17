import React, { useContext, useMemo } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartHidden } from "../../actions/cart.actions";
import { CartContext } from "../../context/cartProvider";

const CartIcon = () => {
  const { cartState, dispatch } = useContext(CartContext);
  const itemCount = useMemo(
    () =>
      cartState.cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity,
        0
      ),
    [cartState]
  );

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount}</span>
    </div>
  );
};

export default CartIcon;
