import React, { useMemo, useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../context/cartProvider";
import CheckoutItem from "../../components/checkout-item/checkout-item";
const Checkout = () => {
  const { cartState, dispatch } = useContext(CartContext);

  // const cartTotal = useMemo(
  //   () =>
  //     cartState.cartItems.reduce(
  //       (accumalatedQuantity, cartItem) =>
  //         accumalatedQuantity + cartItem.quantity * cartItem.price,
  //       0
  //     )
  // );

  const cartTotal = cartState.cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartState.cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
