import { FETCH_PRODUCT, FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => async (dispatch) => {
  const data = "Hello world";

  dispatch({ type: FETCH_PRODUCT, payload: data });
};
