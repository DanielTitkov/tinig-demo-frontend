import actionTypes from "../actionTypes";

const initState = {
    tasks: null,
    error: null,
    loading: false,
};

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.task.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                error: null,
                loading: false,
            };
        case actionTypes.task.GET_TASKS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case actionTypes.task.SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default taskReducer;
