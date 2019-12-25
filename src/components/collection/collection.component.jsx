import React, { Component } from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { CollectionItem } from "../collection.item/collection.item.component";

class Collection extends Component {
  render() {
    const { title, items } = this.props.collections;
    return (
      <div className="collection-page">
        <h2 className="title"> {title}</h2>
        <div className="container items">
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapPropsToState = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapPropsToState)(Collection);
