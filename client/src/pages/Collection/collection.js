import React, { useContext } from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { ShopContext } from "../../context/ShopProvider";
import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;

const CollectionPage = ({ match }) => {
  const { shopState, dispatch } = useContext(ShopContext);
  let data = shopState["collections"][match.params.collectionId];
  const { title, items } = data;

  return (
    <CollectionContainer className="collection-page">
      <CollectionTitle className="title">
        {title ? title : null}
      </CollectionTitle>
      <CollectionItemsContainer className="items">
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

export default CollectionPage;
