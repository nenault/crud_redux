import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import catReducer from "./catReducer";

export default combineReducers({
  form: formReducer,
  cats: catReducer,
});
