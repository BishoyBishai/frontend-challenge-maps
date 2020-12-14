import { createStore, applyMiddleware } from "redux";
import rootReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export default (initialState) => createStore(rootReducers,
    initialState,
    applyMiddleware(logger, thunk),
);