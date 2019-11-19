import React, { Component } from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./PreviewCollection.scss";

class PreviewCollection extends Component {
  render() {
    //destructoring means this.props.items = items, this.props.title = title
    const { items, title } = this.props;
    return (
      <div className="CollectionPreview">
        <h1 className="title">{title}</h1>
        <div className="preview">
          {items
            //   kind of tricky lol, this means i want to filter each item in items array
            //   if item has (idx < 4) => true => return that item
            .filter((item, idx) => idx < 4)
            .map(item => (
              <CollectionItem
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default PreviewCollection;
