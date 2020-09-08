import React from "react";
import { Box, Heading, Button, Nav, Header, Anchor } from "grommet";
import { Notification } from "grommet-icons";
import { Link } from "react-router-dom";
import appConfig from "../../../config/config";
import { NavAnchor } from "../nav_anchor/NavAnchor";

const HeaderBar = () => {
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
                <NavAnchor label="Login" to={appConfig.paths.AUTH} />
            </Nav>
        </Header>
    );
};

export default HeaderBar;
