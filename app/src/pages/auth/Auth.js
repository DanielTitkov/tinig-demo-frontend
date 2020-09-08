import React from "react";
import { Box } from "grommet";
import LoginForm from "../../components/user/login_form/LoginForm";
import SignupForm from "../../components/user/signup_form/SignupForm";
import UserProfile from "../../components/user/user_profile/UserProfile";

const Auth = () => {
    return (
        <Box direction="row" flex justify="center" gap="xlarge">
            <LoginForm />
            <SignupForm />
            <UserProfile />
        </Box>
    );
};

export default Auth;
