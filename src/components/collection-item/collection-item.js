import React, { useContext } from "react";
import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";
import { CartContext } from "../../context/cartProvider";
import { addItem } from "../../actions/cart.actions";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const { cartState, dispatch } = useContext(CartContext);
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
