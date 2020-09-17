import React from "react";
import { DataChart, Heading } from "grommet";
import "./DashboardChart.css";

const DashboardChart = ({ chartData }) => {
    const types = {
        price: {
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
    };

    let chartParams = null;
    if (chartData.type && types[chartData.type]) {
        chartParams = types[chartData.type];
    } else {
        return (
            <div className="dashboard-chart-wrapper">
                <Heading className="dashboard-chart-heading" level="2">
                    {chartData.title ? chartData.title : "Unknown chart"}
                </Heading>
                <Heading color="status-error" level="3">
                    Failed to render chart
                </Heading>
            </div>
        );
    }

    return (
        <div className="dashboard-chart-wrapper">
            <Heading className="dashboard-chart-heading" level="2">
                {chartData.title}
            </Heading>
            <Heading color="dark-6" className="dashboard-chart-subheading" level="5">
                Type: {chartParams.typeTitle}
            </Heading>
            {chartData.data.length > 0 ? (
                <DataChart
                    size={{ width: 700 }}
                    data={chartData.data}
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

export default DashboardChart;
