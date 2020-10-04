import React, { useState } from "react";
import { Box, CheckBox } from "grommet";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../store/actions/taskActions";

const TaskToggleActive = ({ task }) => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(task.active);
    

    const handleToggleActive = (event) => {
        setChecked(event.target.checked);
        const request = {
            code: task.code,
            active: !checked,
        };
        dispatch(updateTask(request));
    };

    return (
        <Box>
            <CheckBox checked={checked} onChange={handleToggleActive} toggle />
        </Box>
    );
};

export default TaskToggleActive;
