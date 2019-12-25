import React from "react";
import CollectionOverview from "../../components/collection.overview/collection.overview.component";
import Collection from "../../components/collection/collection.component";
import "./shop.style.scss";
import { Route } from "react-router-dom";

export const Shop = ({ match }) => {
  return (
    <div className="ShopCollection container">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
