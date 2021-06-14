export const addProductToCart = (obj) => ({
  type: "ADD_PRODUCT_CART",
  payload: obj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const deleteProductInCart = (id) => ({
  type: "DELETE_PRODUCT_CART",
  payload: id,
});

export const plusCartProduct = (id) => ({
  type: "PLUS_CART_PRODUCT",
  payload: id,
});

export const minusCartProduct = (id) => ({
  type: "MINUS_CART_PRODUCT",
  payload: id,
});
