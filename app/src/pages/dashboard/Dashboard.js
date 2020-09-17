import React from "react";
import { Box } from "grommet";
import DashboardBody from "../../components/dashboard/dashboard_body/DashboardBody";

const Dashboard = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" basis="large">
               <DashboardBody />
            </Box>
        </Box>
    );
};

export default Dashboard;
