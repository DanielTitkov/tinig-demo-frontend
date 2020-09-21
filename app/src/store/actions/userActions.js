import { push } from "connected-react-router";
import axios from "axios";
import appConfig from "../../config/config";
import { getErrorMessage } from "../../helper/url";

export const getToken = (loginData) => {
    return (dispatch, getState) => {
        axios
            .post(appConfig.API_URL + appConfig.urls.GET_TOKEN, loginData)
            .then((response) => {
                dispatch({ type: "GET_TOKEN_SUCCESS", data: response.data });
                localStorage.setItem(appConfig.localStorage.TOKEN, response.data.token);
                dispatch(getCurrentUser());
            })
            .catch((err) => {
                dispatch(setUserError(getErrorMessage(err)));
            });
    };
};

export const getCurrentUser = () => {
    return (dispatch, getState) => {
        const token = getState().user.token || localStorage.getItem(appConfig.localStorage.TOKEN);
        if (!token) {
            dispatch(push(appConfig.paths.AUTH));
            return;
        }
        axios
            .post(
                appConfig.API_URL + appConfig.urls.GET_USER,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then((response) => {
                dispatch({ type: "GET_USER_SUCCESS", data: response.data });
                dispatch(push(appConfig.paths.HOME));
            })
            .catch((err) => {
                dispatch(setUserError(getErrorMessage(err)));
            });
    };
};

export const createUser = (createUserData) => {
    return (dispatch, getState) => {
        axios
            .post(appConfig.API_URL + appConfig.urls.CREATE_USER, createUserData)
            .then((response) => {
                dispatch({ type: "CREATE_USER_SUCCESS", data: response.data });
                dispatch(setUserMessage("user created"));
                dispatch(push(appConfig.paths.AUTH));
            })
            .catch((err) => {
                dispatch(setUserError(getErrorMessage(err)));
            });
    };
};

export const logoutUser = () => {
    return (dispatch, getState) => {
        localStorage.removeItem(appConfig.localStorage.TOKEN);
        dispatch(push(appConfig.paths.AUTH));
        dispatch({
            type: "LOGOUT_USER",
        });
    };
};

export const setUserError = (error) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SET_USER_ERROR",
            error: error,
        });
        dispatch(hideErrorOnTimeout());
    };
};

export const setUserMessage = (message) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SET_USER_MESSAGE",
            message: message,
        });
        dispatch(hideMessageOnTimeout());
    };
};

export const hideErrorOnTimeout = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(setUserError(null));
        }, 3000);
    };
};

export const hideMessageOnTimeout = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(setUserMessage(null));
        }, 3000);
    };
};
