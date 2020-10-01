import React from "react";
import { Box } from "grommet";
import TaskDashboard from "../../components/task/task_dashboard/TaskDashboard";
import CreateTaskBlock from "../../components/task/create_task_block/CreateTaskBlock";

const Tasks = () => {
    return (
        <Box direction="row" flex>
            <Box flex align="center" basis="large">
                <CreateTaskBlock />
                <TaskDashboard />
            </Box>
        </Box>
    );
};

export default Tasks;
