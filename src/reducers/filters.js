import { handleActions } from "redux-actions";
import { SELECT_RESTAURANTS_FILTER } from "../actions/filters";

const initialState = {
  filters: [
    {
      id: "pizza",
      label: "Pizza",
    },
    {
      id: "burger",
      label: "Burger",
    },
    {
      id: "sushi",
      label: "Sushi",
    },
  ],
  selectedFilter: null,
};
export default handleActions(
  {
    [SELECT_RESTAURANTS_FILTER]: (state, action) => ({ ...state, selectedFilter: action.payload }),
  },
  initialState
);
