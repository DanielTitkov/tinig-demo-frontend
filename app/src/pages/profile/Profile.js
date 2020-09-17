import React from "react";
import { Box } from "grommet";
import UserProfile from "../../components/user/user_profile/UserProfile";

const Profile = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" justify="center">
                <UserProfile />
            </Box>
        </Box>
    );
};

export default Profile;
