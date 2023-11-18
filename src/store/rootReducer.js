import { combineReducers } from "redux";
import authReducer from "./auth/reducer";     
import postReducer from "./posts/reducer";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
});
