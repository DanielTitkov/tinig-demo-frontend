import React, { useState } from "react";
import { CheckBox } from "grommet";

const TaskToggleActive = ({ task }) => {
    const [checked, setChecked] = useState(task.active);
    const onChange = event => setChecked(event.target.checked);

    return <CheckBox checked={checked} onChange={onChange} toggle />;
};

export default TaskToggleActive;
