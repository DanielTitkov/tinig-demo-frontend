const initState = {
    currentUser: null,
    error: null,
    token: null,
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_VK_USER_SUCCESS":
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    profile: action.user,
                },
            };
        case "GET_TOKEN_SUCCESS":
            return {
                ...state,
                token: action.data.token,
            };
        case "GET_TOKEN_ERROR":
            return {
                ...state,
                error: action.error,
            };
        case "GET_USER_SUCCESS":
            return {
                ...state,
                currentUser: action.data,
            }
        case "GET_USER_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default userReducer;
