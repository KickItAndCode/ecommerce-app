import React, { useContext } from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../context/cartProvider";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../actions/cart.actions";
const CartDropdown = ({ history }) => {
  const { cartState, dispatch } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartState.cartItems.length ? (
          cartState.cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/Checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
