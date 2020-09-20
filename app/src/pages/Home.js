import React from "react";
import { Box, Heading } from "grommet";
import "./Home.css";
import SummaryDashboard from "../components/summary/summary_dashboard/SummaryDashboard";

const Home = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" justify="center">
                <Heading level="2">System summary</Heading>
                <SummaryDashboard />
            </Box>
        </Box>
    );
};

export default Home;
