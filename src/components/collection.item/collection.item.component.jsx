import React from "react";
import "./collection.item.style.scss";
import CustomButton from "../custom-button/custom.button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

export const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="CollectionItem">
      <div
        className="Image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="footer">
        <span className="ItemName">{name}</span>
        <span className="ItemPrice">#{price}</span>
      </div>
      <div className="ButtonDiv">
        <CustomButton onClick={() => addItem(item)} color="outline-dark">
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchtoProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
