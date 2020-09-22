import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grommet, Box } from "grommet";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import { getCurrentUser } from "./store/actions/userActions";
import HeaderBar from "./components/interface/header_bar/HeaderBar";
import appConfig from "./config/config";
import Profile from "./pages/profile/Profile";
import Tasks from "./pages/Tasks/Tasks";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    const theme = {
        global: {
            font: {
                family: "Montserrat",
                size: "18px",
                height: "20px",
            },
            // colors: {
            //     brand: '#228BE6',
            // },
        },
    };

    return (
        <Grommet theme={theme} full>
            <Box fill>
                <HeaderBar />
                <Switch>
                    <Route path={appConfig.paths.AUTH} component={Auth} />
                    <Route path={appConfig.paths.PROFILE} component={Profile} />
                    <Route path={appConfig.paths.TASKS} component={Tasks} />
                    <Route path={appConfig.paths.HOME} component={Home} />
                </Switch>
            </Box>
        </Grommet>
    );
};

export default App;
