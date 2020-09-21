import React from "react";
import { Box, Text, Heading } from "grommet";

const StatusCard = ({ data }) => {
    return (
        <Box round pad="medium" direction="column" background={data.color}>
            <Heading level="2" margin="none" size="small" color="white">
                System
            </Heading>
            <Text color="white" size="medium" weight="bold">
                Status: {data.status}
            </Text>
            <Text color="white">{data.date}</Text>
        </Box>
    );
};

export default StatusCard;
