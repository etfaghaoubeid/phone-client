import {
  FETCHING_PRODUCT_FAIL,
  FETCHING_PRODUCT_SUCCESS,
  START_FETCHING_PRODUCT,
} from "./product-details-action-types";
export const getProductDetails = (id) => async (dispatch) => {
  dispatch({
    type: START_FETCHING_PRODUCT,
    payload: { isLoading: true },
  });
  const res = await fetch(`http://localhost:3333/api/phones/phone/${id}`);
  const product = await res.json();
  if (product) {
    return dispatch({
      type: FETCHING_PRODUCT_SUCCESS,
      payload: { product: product, isLoading: false },
    });
  }
  return dispatch({
    type: FETCHING_PRODUCT_FAIL,
    payload: { errorMessage: "Something went wrong", isLoading: false },
  });
};
