import { combineReducers, createStore } from "redux";
import userReducer from "./user/userReducer";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
})

const store = createStore(rootReducer);

export default store;