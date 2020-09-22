import { push } from "connected-react-router";
import axios from "axios";
import appConfig from "../../config/config";
import { getErrorMessage } from "../../helper/url";
import actionTypes from "../actionTypes";

export const getTasks = (withItems, deactivated) => {
    return (dispatch, getState) => {
        const token = getState().user.token || localStorage.getItem(appConfig.localStorage.TOKEN);
        // TODO: dry it
        if (!token) {
            dispatch(push(appConfig.paths.AUTH));
            return;
        }
        axios
            .post(
                appConfig.API_URL + appConfig.urls.GET_TASKS,
                {
                    withItems: withItems,
                    deactivated: deactivated,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then((response) => {
                dispatch({ type: actionTypes.task.GET_TASKS_SUCCESS, tasks: response.data.tasks });
            })
            .catch((err) => {
                dispatch({ type: actionTypes.task.GET_TASKS_ERROR, error: getErrorMessage(err) });
            });
    };
};
