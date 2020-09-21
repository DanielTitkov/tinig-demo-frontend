import React from "react";
import { Box } from "grommet";
import "./Home.css";
import SummaryDashboard from "../components/summary/summary_dashboard/SummaryDashboard";

const Home = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" justify="center">
                <SummaryDashboard />
            </Box>
        </Box>
    );
};

export default Home;
