import {
  FETCH_PHONES_FAIL,
  FETCH_PHONES_SUCCESS,
  START_FETCHING_PHONE,
  START_FETCHING_PHONES,
  FETCH_PHONE_FAIL,
  FETCH_PHONE_SUCCESS,
} from "../actions-types/phone-types";

export function phoneReducer(state = { isLoading: true }, action) {
  switch (action.type) {
    case START_FETCHING_PHONES:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case START_FETCHING_PHONE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        phones: action.payload.phones,
        isLoading: action.payload.isLoading,
      };
    case FETCH_PHONE_SUCCESS:
      return {
        ...state,
        phone: action.payload.phone,
        isLoading: action.payload.isLoading,
      };
    case FETCH_PHONE_FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case FETCH_PHONES_FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
