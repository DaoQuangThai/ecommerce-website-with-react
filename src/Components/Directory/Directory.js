import React, { Component } from "react";
import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "hats"
        },
        {
          title: "JACKETS",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: ""
        },
        {
          title: "SNEAKERS",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: ""
        },
        {
          title: "WOMENS",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large", //not a good use case we should minimize the case as much as posible, we can do some logic in menuitem to add class,
          linkUrl: ""
        },
        {
          title: "MANS",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((s, index) => (
          <MenuItem
            key={index}
            title={s.title}
            image={s.imageUrl}
            size={s.size}
            linkUrl={s.linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
