import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import summaryReducer from "./summaryReducer";

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        summary: summaryReducer,
        user: userReducer,
    });

export default createRootReducer;
