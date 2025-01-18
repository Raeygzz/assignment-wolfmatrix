import { combineReducers } from "@reduxjs/toolkit";

import ListReducer from "./features/list.slice";

const rootReducer = combineReducers({
  list: ListReducer,
});

export { rootReducer };
