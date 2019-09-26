import React, { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../context/cartProvider";
import {
  removeItem,
  clearItemFromCart,
  addItem
} from "../../actions/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const { cartState, dispatch } = useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
