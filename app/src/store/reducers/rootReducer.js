import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import summaryReducer from "./summaryReducer";
import taskReducer from "./taskReducer";

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        summary: summaryReducer,
        user: userReducer,
        task: taskReducer,
    });

export default createRootReducer;
