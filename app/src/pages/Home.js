import React from "react";
import { Box, Heading } from "grommet";
import "./Home.css";
import UserProfile from "../components/user/user_profile/UserProfile";

const Home = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" justify="center">
                <Heading>Home page</Heading>
                <UserProfile />
            </Box>
        </Box>
    );
};

export default Home;
