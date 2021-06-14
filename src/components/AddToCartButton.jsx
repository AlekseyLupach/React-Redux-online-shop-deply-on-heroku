import React from "react";

function AddToCartButton({ onClick, countProductAdded }) {
  return (
    <button className="product__btn btn" onClick={onClick}>
      Добавить в корзину
      {countProductAdded && <span>({countProductAdded})</span>}
    </button>
  );
}

export default AddToCartButton;
