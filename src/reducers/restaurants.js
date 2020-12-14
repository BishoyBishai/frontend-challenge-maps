import { handleActions } from "redux-actions";
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
} from "../actions/restaurants";

const initialState = {
  restaurants: [],
  loading: false,
};
export default handleActions(
  {
    [FETCH_RESTAURANTS_REQUEST]: (state) => ({ ...state, loading: true }),
    [FETCH_RESTAURANTS_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      restaurants: action.payload,
    }),
    [FETCH_RESTAURANTS_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      errorMsg: action.payload,
    }),
  },
  initialState
);
