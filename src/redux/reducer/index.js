import { combineReducers } from "redux";
import app from "../app/reducer";

const rootReducer = (history) =>
  combineReducers({
    app,
  });

export default rootReducer;
