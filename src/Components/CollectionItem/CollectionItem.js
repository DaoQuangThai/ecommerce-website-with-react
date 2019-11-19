import React, { Component } from "react";
import "./CollectionItem.scss";

class CollectionItem extends Component {
  render() {
    const { id, name, imageUrl, price } = this.props;
    return (
      <div className="CollectionItem">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }
}

export default CollectionItem;
