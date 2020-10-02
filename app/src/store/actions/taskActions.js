import { push } from "connected-react-router";
import axios from "axios";
import appConfig from "../../config/config";
import { getErrorMessage } from "../../helper/url";
import actionTypes from "../actionTypes";

export const setLoading = () => {
    return (dispatch, getState) => {
        dispatch({ type: actionTypes.task.SET_LOADING });
    };
};

export const getTasks = (withItems, deactivated) => {
    return (dispatch, getState) => {
        const token = getState().user.token || localStorage.getItem(appConfig.localStorage.TOKEN);
        // TODO: dry it
        if (!token) {
            dispatch(push(appConfig.paths.AUTH));
            return;
        }
        dispatch(setLoading());
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

export const createTask = (data) => {
    return (dispatch, getState) => {
        const token = getState().user.token || localStorage.getItem(appConfig.localStorage.TOKEN);
        // TODO: dry it
        if (!token) {
            dispatch(push(appConfig.paths.AUTH));
            return;
        }
        dispatch(setLoading());
        axios
            .post(appConfig.API_URL + appConfig.urls.CREATE_TASK, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                dispatch({ type: actionTypes.task.CREATE_TASK_SUCCESS });
            })
            .catch((err) => {
                dispatch({ type: actionTypes.task.CREATE_TASK_ERROR, error: getErrorMessage(err) });
            });
    };
};
