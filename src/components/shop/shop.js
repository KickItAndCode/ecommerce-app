import React, { useState } from "react";
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../collection-preview/collection-preview";

const Shop = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
