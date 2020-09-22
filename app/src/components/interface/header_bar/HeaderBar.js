import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Nav, Header, Anchor } from "grommet";
import appConfig from "../../../config/config";
import { NavAnchor } from "../nav_anchor/NavAnchor";
import { logoutUser } from "../../../store/actions/userActions";
import "./HeaderBar.css";

const HeaderBar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <Header
            className="header-bar-wrapper"
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="brand"
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="medium"
            style={{ zIndex: "1" }}
        >
            <Heading level="3" margin="none">
                Studio
            </Heading>
            <Nav direction="row">
                <NavAnchor label="Home" to={appConfig.paths.HOME} />
                <NavAnchor label="Tasks" to={appConfig.paths.TASKS} />
                {!currentUser ? <NavAnchor label="Login" to={appConfig.paths.AUTH} /> : null}
                {currentUser ? <NavAnchor label="Profile" to={appConfig.paths.PROFILE} /> : null}
                {currentUser ? <Anchor label="Logout" onClick={handleLogout} /> : null}
            </Nav>
        </Header>
    );
};

export default HeaderBar;
