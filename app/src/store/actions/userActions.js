import { push } from "connected-react-router";
import axios from "axios";
import appConfig from "../../config/config";

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
                dispatch({
                    type: "GET_TOKEN_ERROR",
                    error: err,
                });
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
                console.log("USER ERROR", err.response.data);
                dispatch({
                    type: "GET_USER_ERROR",
                    error: err,
                });
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
