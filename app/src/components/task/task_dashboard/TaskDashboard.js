import { Box } from "grommet";
import React, { useEffect } from "react";
import Loader from "react-loader";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../../store/actions/taskActions";
import TaskDashboardChart from "../task_dashboard_chart/TaskDashboardChart";

const TaskDashboard = () => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.task.tasks);
    const taskLoading = useSelector((state) => state.task.loading);

    useEffect(() => {
        const withItems = true;
        dispatch(getTasks(withItems));
    }, [dispatch]);

    return (
        <Loader
            loaded={!taskLoading}
            lines={13}
            length={20}
            width={10}
            radius={30}
            corners={1}
            direction={1}
            color="#000"
            speed={1}
            trail={60}
            hwaccel={false}
            className="spinner"
            zIndex={2e9}
            top="50%"
            left="50%"
            scale={1.0}
        >
            <Box direction="column">
                {tasks && tasks.map((task) => <TaskDashboardChart task={task} key={task.code} />)}
            </Box>
        </Loader>
    );
};

export default TaskDashboard;
