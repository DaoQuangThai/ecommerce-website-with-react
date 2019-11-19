import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/shop/ShopPage";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
