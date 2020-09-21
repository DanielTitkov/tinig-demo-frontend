const initState = {
    systemSummary: null,
    error: null,
    loading: false,
};

const summaryReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_SUMMARY_SUCCESS":
            return {
                ...state,
                systemSummary: action.data,
                error: null,
                loading: false,
            };
        case "GET_SUMMARY_ERROR":
            return {
                ...state,
                systemSummary: {},
                error: action.error,
                loading: false,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default summaryReducer;
