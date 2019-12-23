import React from "react";
import { shopdataSelector } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection from "../../components/collection.preview/collection.preview.component";
import "./shop.style.scss";

export const Shop = ({ collections }) => {
  return (
    <div className="ShopCollection container">
      {collections.map(({ id, ...OtherCollection }) => (
        <Collection key={id} {...OtherCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopdataSelector
});

export default connect(mapStateToProps)(Shop);
