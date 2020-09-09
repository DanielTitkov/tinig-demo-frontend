const initState = {
    currentUser: null,
    error: null,
    token: null,
    message: null,
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        // case "GET_VK_USER_SUCCESS":
        //     return {
        //         ...state,
        //         currentUser: {
        //             ...state.currentUser,
        //             profile: action.user,
        //         },
        //     };
        case "GET_TOKEN_SUCCESS":
            return {
                ...state,
                token: action.data.token,
                error: null,
            };
        // case "GET_TOKEN_ERROR":
        //     return {
        //         ...state,
        //         error: action.error,
        //     };
        case "GET_USER_SUCCESS":
            return {
                ...state,
                currentUser: action.data,
                error: null,
            };
        // case "GET_USER_ERROR":
        //     return {
        //         ...state,
        //         error: action.error,
        //     };
        case "LOGOUT_USER":
            return {
                ...state,
                currentUser: null,
                token: null,
                error: null, 
            };
        case "CREATE_USER_SUCCESS":
            return {
                ...state,
                error: null,
            };
        // case "CREATE_USER_ERROR":
        //     return {
        //         ...state,
        //         error: action.error,
        //     };
        case "SET_USER_ERROR":
            return {
                ...state,
                error: action.error,
            };
        case "SET_USER_MESSAGE":
            return {
                ...state,
                message: action.message,
            };
        default:
            return state;
    }
};

export default userReducer;
