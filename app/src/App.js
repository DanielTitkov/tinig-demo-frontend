import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grommet, Box, Heading, Button } from "grommet";
import { Notification } from "grommet-icons";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import { getCurrentUser } from "./store/actions/userActions";

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

    const AppBar = (props) => (
        <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="brand"
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="medium"
            style={{ zIndex: "1" }}
            {...props}
        />
    );

    return (
        <Grommet theme={theme} full>
            <Box fill>
                <AppBar>
                    <Heading level="3" margin="none">
                        Студия
                    </Heading>
                    <Button icon={<Notification />} />
                </AppBar>
                <Home />
                <Auth />
            </Box>
        </Grommet>
    );
};

export default App;
