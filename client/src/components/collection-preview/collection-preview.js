import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";
import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items &&
        items
          .filter((item, idx) => idx < 4)
          .map(item => <CollectionItem key={item.id} item={item} />)}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
