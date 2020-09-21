const appConfig = {
    API_URL: "http://localhost:8000/",
    urls: {
        // public
        GET_TOKEN: "getToken",
        CREATE_USER: "createUser",
        GET_SYSTEM_SUMMARY: "getSystemSummary",
        // private
        GET_USER: "private/getUser",
    },
    localStorage: {
        TOKEN: "tinigDemoToken",
    },
    paths: {
        HOME: "/",
        AUTH: "/auth",
        LOGOUT: "/logout",
        PROFILE: "/profile",
        DASHBOARD: "/dashboard",
    },
};

export default appConfig;
