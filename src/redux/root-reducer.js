import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./auth-reducer";
import flightsReducer from "./flights-reducer";

let rootReducer = combineReducers({
  authReducer,
  flightsReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;
