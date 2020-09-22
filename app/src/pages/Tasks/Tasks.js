import React from "react";
import { Box } from "grommet";
import TaskDashboard from "../../components/task/task_dashboard/TaskDashboard";

const Tasks = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" basis="large">
               <TaskDashboard />
            </Box>
        </Box>
    );
};

export default Tasks;
