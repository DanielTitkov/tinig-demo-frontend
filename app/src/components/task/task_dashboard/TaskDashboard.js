import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../../store/actions/taskActions";
import TaskDashboardChart from "../task_dashboard_chart/TaskDashboardChart";

const TaskDashboard = () => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.task.tasks);
    // const tasksError = useSelector((state) => state.task.error);
    // const tasksLoading = useSelector((state) => state.task.loading);

    useEffect(() => {
        const withItems = true;
        const deactivated = false;
        dispatch(getTasks(withItems, deactivated));
    }, [dispatch]);

    return (
        <div>
            {tasks && tasks.map((task) => (
                <TaskDashboardChart task={task} key={task.code} />
            ))}
        </div>
    );
};

export default TaskDashboard;
