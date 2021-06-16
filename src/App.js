import "./styles/style.scss";

import React from "react";
import Gotop from "react-go-top";
import { Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Catalog, Cart, HomePages, ProductPages } from "./pages";

function App() {
  return (
    <div className="wrapper grid-wrapper">
      <Header />
      <Route path="/" component={HomePages} exact />
      <Route path="/catalog" component={Catalog} exact />
      <Route path="/cart" component={Cart} exact />
      <Route path="/product/:id" component={ProductPages} exact />
      <Gotop
        style={{ width: "40px", height: "40px" }}
        visibilityHeight={500}
        target={() => document.getElementById("app")}
      />
      <Footer />
    </div>
  );
}

export default App;
