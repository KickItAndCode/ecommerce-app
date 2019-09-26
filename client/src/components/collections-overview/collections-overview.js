import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import CollectionPreview from "../collection-preview/collection-preview";
import styled from "styled-components";

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = () => {
  const { shopState } = useContext(ShopContext);
  const { collections } = shopState;

  let data =
    collections && Object.keys(collections).map(key => collections[key]);
  return (
    <CollectionsOverviewContainer>
      {data &&
        data.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
