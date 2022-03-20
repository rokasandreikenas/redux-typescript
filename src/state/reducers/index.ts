import bankReducer from "./bankReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
