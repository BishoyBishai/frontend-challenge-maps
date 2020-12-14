import { combineReducers } from "redux";
import restaurants from './restaurants';
import filters from './filters';


export default combineReducers({
    restaurants,
    filters,
});