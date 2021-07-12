import { combineReducers } from "redux";
import authReducers from "../../Container/Admin/Login/module/reducers";
import addUserReducer from "../../Container/Admin/Register/module/reducers";

const reducer = combineReducers({
  // literal object
  addUserReducer,
  authReducers,
});

export default reducer;
