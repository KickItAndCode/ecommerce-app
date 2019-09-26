import React, { useEffect, useState, useContext } from "react";
import CollectionsOverview from "../collections-overview/collections-overview";
import { Route } from "react-router-dom";
import Collection from "../../pages/Collection/collection";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { ShopContext } from "../../context/ShopProvider";
import { updateCollections } from "../../actions/shop.actions";
import WithSpinner from "../with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);
const Shop = ({ match }) => {
  const unsubscribeFromSnapshot = null;
  const [isLoading, setIsLoading] = useState(true);
  const { shopState, dispatch } = useContext(ShopContext);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default Shop;
