import axios from "axios";
import appConfig from "../../config/config";

export const setLoading = () => {
    return (dispatch, getState) => {
        dispatch({ type: "SET_LOADING" });
    };
};

export const getSystemSummary = () => {
    return (dispatch, getState) => {
        dispatch(setLoading());
        axios
            .post(
                appConfig.API_URL + appConfig.urls.GET_SYSTEM_SUMMARY,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
            .then((response) => {
                dispatch({ type: "GET_SUMMARY_SUCCESS", data: response.data });
            })
            .catch((err) => {
                dispatch({ type: "GET_SUMMARY_ERROR", error: err });
            });
    };
};
