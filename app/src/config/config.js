const appConfig = {
    API_URL: "http://localhost:8000/",
    urls: {
        GET_TOKEN: "getToken",
        CREATE_USER: "createUser",
        GET_USER: "private/getUser",
    },
    localStorage: {
        TOKEN: "tinigDemoToken",
    },
    paths: {
        HOME: "/",
        AUTH: "/auth",
        LOGOUT: "/logout",
    },
};

export default appConfig;
