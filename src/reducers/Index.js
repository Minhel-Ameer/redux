import changeTheNumber from "./UpDown";
import { combineReducers } from "redux";
import multTheNumber from "./MulDiv"

const rootReducer = combineReducers({
  changeTheNumber,
  multTheNumber
});

export default rootReducer;