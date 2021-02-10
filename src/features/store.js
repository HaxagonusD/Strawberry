import songs from "./songs/reducer";
import recorder from "./recorder/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ songs, recorder }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
