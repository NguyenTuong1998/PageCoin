import { combineReducers } from "redux";
import addUserReducer from "../../Container/Admin/Register/module/reducers";

const reducer = combineReducers({
  // literal object
  addUserReducer,
});

export default reducer;
