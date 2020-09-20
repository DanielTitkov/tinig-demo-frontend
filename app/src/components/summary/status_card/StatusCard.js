import React from "react";
import { Box, Text, Heading } from "grommet";

const StatusCard = ({ data }) => {
    return (
        <Box round pad="medium" direction="column" background="status-ok">
            <Heading level="2" margin="none" size="small" color="white">
                System
            </Heading>
            <Text color="white" size="medium" weight="bold">
                Status: healthy
            </Text>
            <Text size="small" color="white">
                11.12.2009
            </Text>
        </Box>
    );
};

export default StatusCard;
