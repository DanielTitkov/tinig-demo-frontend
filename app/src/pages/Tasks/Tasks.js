import React from "react";
import { Box } from "grommet";
import TaskDashboard from "../../components/task/task_dashboard/TaskDashboard";
import CreateTaskBlock from "../../components/task/create_task_block/CreateTaskBlock";
import { useSelector } from "react-redux";
import Message from "../../components/interface/message/Message";

const Tasks = () => {
    const taskError = useSelector((state) => state.task.error);

    // TODO: refactor to boxes?
    return (
        <Box direction="row" flex>
            <Box flex direction="column" align="center">
                    {taskError ? <Message message={taskError} type="status-error" /> : null}
                    <CreateTaskBlock />
                    <TaskDashboard />
            </Box>
        </Box>
    );
};

export default Tasks;
