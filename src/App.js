import "./styles/style.scss";

import { Header } from "./components";
import { Footer } from "./components";
import { Catalog, Cart, HomePages, ProductPages } from "./pages";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper grid-wrapper">
      <Header />
      <Route path="/" component={HomePages} exact />
      <Route path="/catalog" component={Catalog} exact />
      <Route path="/cart" component={Cart} exact />
      <Route path="/product/:id" component={ProductPages} exact />
      <Footer />
    </div>
  );
}

export default App;
