import {
  START_FETCHING_PHONES,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAIL,
  START_FETCHING_PHONE,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONE_FAIL,
} from "../actions-types/phone-types";

export function getPhones() {
  return async function (dispatch) {
    dispatch({ type: START_FETCHING_PHONES, payload: { isLoading: true } });
    const res = await fetch("http://localhost:3333/api/phones/");
    const data = await res.json();
    if (data.length) {
      return dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: data,
      });
    }
    return dispatch({
      type: FETCH_PHONES_FAIL,
      payload: {
        isLoading: false,
      },
    });
  };
}
export const getPhone = (id) => {
  return async (dispatch) => {
    dispatch({ type: START_FETCHING_PHONE, payload: { isLoading: true } });
    const res = await fetch(``);
    const data = await res.json();
    if (data) {
      return dispatch({ type: FETCH_PHONE_SUCCESS, payload: { phone: data } });
    }
    return dispatch({
      type: FETCH_PHONE_FAIL,
      payload: { error: "some thing went wrong", isLoading: false },
    });
  };
};
