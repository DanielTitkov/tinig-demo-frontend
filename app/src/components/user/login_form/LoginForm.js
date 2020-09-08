import React from "react";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { useDispatch } from "react-redux";
import { getToken } from "../../../store/actions/userActions";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState({});

    const handleSumbit = ({ value }) => {
        setValue({});
        dispatch(getToken(value));
    };

    return (
        <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onSubmit={handleSumbit}
            validate="blur"
        >
            <FormField name="username" required>
                <TextInput name="username" placeholder="username" />
            </FormField>
            <FormField name="password" htmlFor="password" required>
                <TextInput name="password" placeholder="password" type="password" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Sign In" />
            </Box>
        </Form>
    );
};

export default LoginForm;
