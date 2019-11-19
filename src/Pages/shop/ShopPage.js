import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../Components/PreviewCollection/PreviewCollection";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(collection => (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
        {/* ANOTHER WAY TO PASSING PROPS */}
        {/* {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))} */}
      </div>
    );
  }
}

export default ShopPage;
