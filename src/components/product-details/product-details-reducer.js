import {
  FETCHING_PRODUCT_FAIL,
  FETCHING_PRODUCT_SUCCESS,
  START_FETCHING_PRODUCT,
} from "./product-details-action-types";

const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case START_FETCHING_PRODUCT:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case FETCHING_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        product: action.payload.product,
      };
    case FETCHING_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default productDetailsReducer;
