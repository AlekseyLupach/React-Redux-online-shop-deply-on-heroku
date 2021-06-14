import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
