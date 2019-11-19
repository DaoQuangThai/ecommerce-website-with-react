import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

class MenuItem extends Component {
  render() {
    return (
      <div
        className={`${this.props.size} menu-item`}
        onClick={() =>
          this.props.history.push(
            `${this.props.match.url}${this.props.linkUrl}`
          )
        }
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${this.props.image})` }}
        />
        <div className="content">
          <h1 className="title">{this.props.title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuItem);
