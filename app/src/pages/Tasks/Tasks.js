import React from "react";
import { Box } from "grommet";
import TaskDashboard from "../../components/task/task_dashboard/TaskDashboard";
import CreateTaskBlock from "../../components/task/create_task_block/CreateTaskBlock";

const Tasks = () => {

    // TODO: refactor to boxes?
    return (
        <Box direction="row" flex>
            <Box flex direction="column" align="center">
                <CreateTaskBlock /> 
                <TaskDashboard />
            </Box>
        </Box>
    );
};

export default Tasks;
