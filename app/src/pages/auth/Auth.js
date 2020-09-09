import React from "react";
import { Box } from "grommet";
import LoginForm from "../../components/user/login_form/LoginForm";
import SignupForm from "../../components/user/signup_form/SignupForm";

const Auth = () => {
    return (
        <Box direction="row" flex justify="center" gap="xlarge">
            <LoginForm />
            <SignupForm />
        </Box>
    );
};

export default Auth;
