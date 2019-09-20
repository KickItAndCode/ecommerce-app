import React, { useContext } from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";
import { ShopContext } from "../../context/ShopProvider";

const CollectionPage = ({ match }) => {
  const { shopState, dispatch } = useContext(ShopContext);

  let data = shopState[match.params.collectionId];

  const { title, items } = data;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
