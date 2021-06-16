import React from "react";
import ContentLoader from "react-content-loader";

function ProductsLoading() {
  return (
    <ContentLoader
      speed={2}
      width={338}
      height={413}
      viewBox="0 0 338 413"
      backgroundColor="#f3f3f3"
      foregroundColor="#ffffff"
    >
      <rect x="4" y="1" rx="0" ry="0" width="1" height="413" />
      <rect x="5" y="1" rx="0" ry="0" width="336" height="1" />
      <rect x="336" y="1" rx="0" ry="0" width="1" height="413" />
      <rect x="5" y="1" rx="0" ry="0" width="336" height="1" />
      <rect x="6" y="411" rx="0" ry="0" width="336" height="1" />
      <rect x="20" y="177" rx="0" ry="0" width="296" height="37" />
      <rect x="20" y="308" rx="0" ry="0" width="115" height="27" />
      <rect x="146" y="315" rx="0" ry="0" width="64" height="13" />
      <rect x="20" y="256" rx="0" ry="0" width="101" height="33" />
      <rect x="20" y="351" rx="4" ry="4" width="300" height="44" />
      <rect x="20" y="226" rx="0" ry="0" width="125" height="16" />
      <rect x="94" y="11" rx="0" ry="0" width="152" height="143" />
      <rect x="158" y="161" rx="0" ry="0" width="30" height="4" />
    </ContentLoader>
  );
}

export default ProductsLoading;
