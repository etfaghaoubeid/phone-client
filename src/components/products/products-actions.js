import {
  FETCHING_PRODUCTS_SUCCESS,
  START_FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_FAIL,
} from "./products-action-types";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: START_FETCHING_PRODUCTS,
    payload: { isLoading: true },
  });

  const res = await fetch("http://localhost:3333/api/phones/");
  const products = await res.json();
  if (products.length) {
    return dispatch({
      type: FETCHING_PRODUCTS_SUCCESS,
      payload: { products, isLoading: false },
    });
  }
  return dispatch({
    type: FETCHING_PRODUCTS_FAIL,
    payload: { isLoading: false, errorMessage: "Some thing went wrong" },
  });
};
