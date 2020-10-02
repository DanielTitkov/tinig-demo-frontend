import React, { useState } from "react";
import { Box, Button } from "grommet";
import CreateTaskForm from "../create_task_form/CreateTaskForm";
import "./CreateTaskBlock.css";
import { useSelector } from "react-redux";

const CreateTaskBlock = () => {
    const [show, setShow] = useState(false);

    const taskLoading = useSelector((state) => state.task.loading);

    return (
        !taskLoading && <div className="create-task-block-wrapper">
            <Box margin='medium'>
                <Button
                    label="Create new task"
                    onClick={() => {
                        setShow(!show);
                    }}
                />
                {show ? <CreateTaskForm /> : null}
            </Box>
        </div>
    );
};

export default CreateTaskBlock;
