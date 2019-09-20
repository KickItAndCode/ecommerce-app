import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import CollectionPreview from "../collection-preview/collection-preview";
import "./collections-overview.scss";
const CollectionsOverview = () => {
  const { shopState } = useContext(ShopContext);
  let data = Object.keys(shopState).map(key => shopState[key]);
  return (
    <div className="collections-overview">
      {data.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
