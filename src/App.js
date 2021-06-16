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
      <Route exact path="/" component={HomePages} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={ProductPages} />
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
