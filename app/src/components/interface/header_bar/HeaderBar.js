import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Button, Nav, Header, Anchor } from "grommet";
import { Notification } from "grommet-icons";
import appConfig from "../../../config/config";
import { NavAnchor } from "../nav_anchor/NavAnchor";
import { logoutUser } from "../../../store/actions/userActions";

const HeaderBar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <Header
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
                Студия
            </Heading>
            <Button icon={<Notification />} />
            <Nav direction="row">
                <NavAnchor label="Home" to={appConfig.paths.HOME} />
                {!currentUser ? <NavAnchor label="Login" to={appConfig.paths.AUTH} /> : null}
                {currentUser ? <Anchor label="Logout" onClick={handleLogout} /> : null}
            </Nav>
        </Header>
    );
};

export default HeaderBar;
