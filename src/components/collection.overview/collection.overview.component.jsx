import React from "react";
import "./collections.overview.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { shopdataSelector } from "../../redux/shop/shop.selector";
import CollectionsPreview from "../collection.preview/collection.preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...OtherCollection }) => (
        <CollectionsPreview key={id} {...OtherCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopdataSelector
});

export default connect(mapStateToProps)(CollectionsOverview);
