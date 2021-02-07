import { homeReduce } from "../reducer/homeReduce";
import { resumeReduce } from "../reducer/resumeReduce";

import { combineReducers, createStore } from "redux";
export const store = createStore(
  combineReducers({
    homeReduce,
    resumeReduce,
  })
);
