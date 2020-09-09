import React from "react";
import { useSelector } from "react-redux";
import { Box, Tabs, Tab } from "grommet";
import LoginForm from "../../components/user/login_form/LoginForm";
import SignupForm from "../../components/user/signup_form/SignupForm";
import Message from "../../components/interface/message/Message";

const Auth = () => {
    const userError = useSelector((state) => state.user.error);
    const userMessage = useSelector((state) => state.user.message);
    return (
        <Box direction="column" flex align="center" justify="center" gap="large">
            {userError ? <Message message={userError} type="status-error" /> : null}
            {userMessage ? <Message message={userMessage} type="status-ok" /> : null}
            <Tabs>
                <Tab title="Login">
                    <LoginForm />
                </Tab>
                <Tab title="Sign up">
                    <SignupForm />
                </Tab>
            </Tabs>
        </Box>
    );
};

export default Auth;
