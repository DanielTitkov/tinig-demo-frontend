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
                console.log("USER", response.data);
                dispatch({ type: "GET_USER_SUCCESS", data: response.data });
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
