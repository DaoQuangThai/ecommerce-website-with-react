import React, { Component } from "react";
import "./HomePage.scss";
import Directory from "../Components/Directory/Directory";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
