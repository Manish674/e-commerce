import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/product" render={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
