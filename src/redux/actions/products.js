import axios from "axios";

export const setLoaded = (value) => ({
  type: "SET_LOADED",
  payload: value,
});

export const fetchProducts = (sortBy, category, search) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/products?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}&q=${search}`
    )
    .then(({ data }) => {
      dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
  type: "SET_PRODUCTS",
  payload: items,
});
