import axios from "axios";
import appConfig from "../../config/config";

export const getToken = (loginData) => {
    return (dispatch, getState) => {
        axios
            .post("http://localhost:8000/" + appConfig.urls.GET_TOKEN, loginData)
            .then((response) => {
                dispatch({ type: "GET_TOKEN_SUCCESS", data: response.data });
            })
            .catch((err) => {
                dispatch({
                    type: "GET_TOKEN_ERROR",
                    error: err,
                });
            });
    };
};
