import { combineReducers } from "redux";
import { taskReducer } from "./task/task.reducer";
import { userReducer } from "./user/user.reducer"
import { errorReducer } from "./error/error.reducer"  

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
  error: errorReducer
})