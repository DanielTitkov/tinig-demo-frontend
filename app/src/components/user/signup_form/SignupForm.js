import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Form, FormField, TextInput, MaskedInput } from "grommet";
import { createUser } from "../../../store/actions/userActions";

const SignupForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState({});

    const handleSumbit = ({ value }) => {
        dispatch(createUser(value));
        setValue({});
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
            <FormField name="email" required>
                <MaskedInput
                    name="email"
                    type="email"
                    mask={[
                        { regexp: /^[\w\-_.]+$/, placeholder: "your" },
                        { fixed: "@" },
                        { regexp: /^[\w]+$/, placeholder: "email" },
                        { fixed: "." },
                        { regexp: /^[\w]+$/, placeholder: "com" },
                    ]}
                />
            </FormField>
            <FormField htmlFor="password" name="password" required>
                <TextInput name="password" placeholder="password" type="password" />
            </FormField>
            <FormField htmlFor="password" name="passwordRepeat" required>
                <TextInput name="passwordRepeat" placeholder="repeat password" type="password" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Sign In" />
            </Box>
        </Form>
    );
};

export default SignupForm;
