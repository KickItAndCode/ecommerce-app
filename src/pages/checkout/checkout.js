import React, { useMemo, useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../context/cartProvider";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

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
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default Checkout;
