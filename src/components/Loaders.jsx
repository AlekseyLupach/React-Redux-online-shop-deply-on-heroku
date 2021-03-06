import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loaders() {
  return (
    <div className="container product-wrapper">
      <Loader
        type="Puff"
        color="#0a84ff"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Loaders;
