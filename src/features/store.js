import songsReducer from "./songs/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ songs: songsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
