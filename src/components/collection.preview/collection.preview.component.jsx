import React, { Component } from "react";
import CollectionItem from "../collection.item/collection.item.component";
import "./collection.preview.style.scss";

class Preview extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <div className="CollectionPreview">
        <h1 className="CollectionTitle">{title}</h1>
        <div className="Preview">
          {items
            .filter((item, index) => index < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
  }
}
export default Preview;
