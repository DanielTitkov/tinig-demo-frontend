import React, { useState } from "react";
import { Box, Button } from "grommet";
import CreateTaskForm from "../create_task_form/CreateTaskForm";
import "./CreateTaskBlock.css";

const CreateTaskBlock = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="create-task-block-wrapper">
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
