import React from "react";
import { Box, Text, Heading } from "grommet";

const StatusBadge = ({ background = "status-unknown", ...rest }) => (
    <Box width="12px" height="12px" round="small" background={background} {...rest} />
);

const NumberCard = ({ data }) => {
    return (
        <Box round pad="medium" direction="column" background="light-1">
            <Heading level="2" margin="none" size="small">
                {data.name}
            </Heading>
            <Text size="90px" weight="bold">
                {data.count}
            </Text>
            <Box>
                {data.detail &&
                    data.detail.map((d) => (
                        <Box direction="row" align="center" key={d.name}>
                            <StatusBadge size="xlarge" background={d.color} />
                            <Box pad="xsmall">
                                <Text size="small" color="dark-1" margin={{ left: "xsmall" }}>
                                    {d.name}: {d.count}
                                </Text>
                            </Box>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default NumberCard;
