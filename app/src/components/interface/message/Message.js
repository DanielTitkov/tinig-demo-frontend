import React from "react";
import { Box } from "grommet";

const Message = ({ type, message }) => {
    return (
        <Box background={type} pad="medium" round="small">
            Status: {message}
        </Box>
    );
};

export default Message;
