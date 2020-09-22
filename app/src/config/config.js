const privatePrefix = "private";

const appConfig = {
    API_URL: "http://localhost:8000/",
    urls: {
        // public
        GET_TOKEN: "getToken",
        CREATE_USER: "createUser",
        GET_SYSTEM_SUMMARY: "getSystemSummary",
        // private
        GET_USER: privatePrefix + "/getUser",
        GET_TASKS: privatePrefix + "/getTasks",
    },
    localStorage: {
        TOKEN: "tinigDemoToken",
    },
    paths: {
        HOME: "/",
        AUTH: "/auth",
        LOGOUT: "/logout",
        PROFILE: "/profile",
        TASKS: "/tasks",
        // DASHBOARD: "/dashboard",
    },
    tasks: {
        types: {
            RANDOM: "random",
            PRICE: "price",
        },
    },
};

export default appConfig;
