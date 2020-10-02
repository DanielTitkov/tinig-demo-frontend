import React from "react";
import { Box, DataChart, Heading } from "grommet";
import "./TaskDashboardChart.css";
import appConfig from "../../../config/config";
import TaskToggleActive from "../task_toggle_active/TaskToggleActive";

const TaskDashboardChart = ({ task }) => {
    const types = {
        [appConfig.tasks.types.PRICE]: {
            typeTitle: "price monitoring",
            series: ["date", "price"],
            chart: [
                {
                    property: ["priceMin", "priceMax"],
                    type: "area",
                    thickness: "xsmall",
                    color: "graph-3",
                    opacity: "medium",
                },
                {
                    property: "price",
                    type: "line",
                    thickness: "xxsmall",
                    dash: false,
                    round: true,
                },
                { property: "price", type: "point", thickness: "small" },
            ],
            axis: { x: "date", y: { property: "amount", granularity: "fine" } },
            guide: { y: { granularity: "medium" }, x: { granularity: "fine" } },
        },
        [appConfig.tasks.types.RANDOM]: {
            typeTitle: "random number",
            series: ["date", "value"],
            chart: [
                {
                    property: "value",
                    type: "line",
                    thickness: "xxsmall",
                    dash: false,
                    round: true,
                },
                { property: "value", type: "point", thickness: "small" },
            ],
            axis: { x: "date", y: { property: "value", granularity: "fine" } },
            guide: { y: { granularity: "medium" }, x: { granularity: "fine" } },
        },
    };

    let chartParams = null;
    if (task.type && types[task.type]) {
        chartParams = types[task.type];
    } else {
        return (
            <div className="dashboard-chart-wrapper">
                <Heading className="dashboard-chart-heading" level="2">
                    {task.title ? task.title : "Unknown chart"}
                </Heading>
                <Heading color="status-error" level="3">
                    Failed to render chart
                </Heading>
            </div>
        );
    }

    const data =
        (task.items &&
            task.items.map((i) => ({
                ...i.data,
                date: i.createTime,
            }))) ||
        [];

    return (
        <div align="start" className="dashboard-chart-wrapper">
            <Heading
                level="2"
                margin={{
                    horizontal: "none",
                    top: "large",
                    bottom: "xsmall",
                }}
            >
                <Box direction="row" justify="between" gap="medium">
                    <Box>{task.title}</Box>
                    <Box alignSelf="center">
                        <TaskToggleActive task={task} />
                    </Box>
                </Box>
            </Heading>
            <Heading
                level="4"
                margin={{
                    horizontal: "none",
                    vertical: "xsmall",
                }}
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
                Type: {chartParams.typeTitle}
            </Heading>
            {data.length > 0 ? (
                <DataChart
                    size={{ width: 700 }} // FIXME it says invalid but works
                    data={data}
                    series={chartParams.series}
                    chart={chartParams.chart}
                    bounds="align"
                    axis={chartParams.axis}
                    guide={chartParams.guide}
                    gap="medium"
                    pad="medium"
                    legend
                    detail
                />
            ) : (
                <Heading level="4">No data yet</Heading>
            )}
        </div>
    );
};

export default TaskDashboardChart;
