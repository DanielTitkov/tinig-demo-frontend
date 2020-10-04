import { Box, Heading } from "grommet";
import React from "react";
import TaskToggleActive from "../task_toggle_active/TaskToggleActive";

const TaskHeader = ({ task, typeLabel }) => {
    const color = task.active ? "dark-1" : "dark-6";

    return (
        <div>
            <Heading
                level="2"
                margin={{
                    horizontal: "none",
                    top: "large",
                    bottom: "xsmall",
                }}
                color={color}
            >
                <Box direction="row" justify="between" gap="medium">
                    <Box>{task.title}</Box>
                    <Box alignSelf="center">
                        <TaskToggleActive task={task} />
                        {/* <Button label="delete" /> */}
                    </Box>
                </Box>
            </Heading>
            <Heading
                level="4"
                margin={{
                    horizontal: "none",
                    vertical: "xsmall",
                }}
                color={color}
            >
                {task.description}
            </Heading>
            <Heading
                color="dark-6"
                level="5"
                margin={{
                    horizontal: "none",
                    vertical: "xsmall",
                }}
            >
                Type: {typeLabel}
            </Heading>
        </div>
    );
};

export default TaskHeader;
