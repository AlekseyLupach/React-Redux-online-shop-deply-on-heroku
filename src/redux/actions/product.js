import axios from "axios";

export const setLoaded = (value) => ({
  type: "SET_LOADED",
  payload: value,
});

export const fetchProduct = (id) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/products/?id=${id}`).then(({ data }) => {
    dispatch(setProduct(data));
  });
};

export const setProduct = (item) => ({
  type: "SET_PRODUCT",
  payload: item,
});
