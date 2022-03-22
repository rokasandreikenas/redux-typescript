import bankReducer from "./bankReducer";
import { combineReducers } from "redux";
import commentReducer from "./commentReducer";

const reducers = combineReducers({
  bank: bankReducer,
  comment: commentReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
