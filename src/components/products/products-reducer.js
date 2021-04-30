import {
  FETCHING_PRODUCTS_FAIL,
  FETCHING_PRODUCTS_SUCCESS,
  START_FETCHING_PRODUCTS,
} from "./products-action-types";

const productsReducer = (
  state = { isLoading: false, products: [] },
  action
) => {
  switch (action.type) {
    case START_FETCHING_PRODUCTS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        products: action.payload.products,
      };
    case FETCHING_PRODUCTS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default productsReducer;
