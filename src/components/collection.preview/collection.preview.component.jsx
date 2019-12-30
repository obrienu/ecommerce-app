import React, { Component } from "react";
import CollectionItem from "../collection.item/collection.item.component";
import "./collection.preview.style.scss";
import { Link } from "react-router-dom";

class Preview extends Component {
  render() {
    const { title, items, urlParam } = this.props;
    return (
      <div className="CollectionPreview">
        <Link to={`/shop/${urlParam}`} className="CollectionTitle">
          {title}
        </Link>
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
