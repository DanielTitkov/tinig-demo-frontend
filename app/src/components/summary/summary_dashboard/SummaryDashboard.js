import React from "react";
import { Box } from "grommet";
import NumberCard from "../number_card/NumberCard";
import StatusCard from "../status_card/StatusCard";

const systemSummary = {
    users: 10,
    tasks: 2,
    activeTasks: 1,
    items: 7,
    avgItemsPerTask: 3.5,
    createTime: "2020-09-20T22:15:38.900324Z",
};

const SummaryDashboard = () => {
    return (
        <Box flex gap="medium" pad="medium">
            <Box flex={false} direction="row-responsive" gap="small" wrap>
                <StatusCard />
                <NumberCard
                    data={{
                        name: "Users",
                        count: systemSummary.users,
                    }}
                />
                <NumberCard
                    data={{
                        name: "Tasks",
                        count: systemSummary.tasks,
                        detail: [
                            {
                                name: "Active",
                                count: systemSummary.activeTasks,
                                color: "status-ok",
                            },
                            {
                                name: "Stopped",
                                count: systemSummary.tasks - systemSummary.activeTasks,
                                color: "status-disabled",
                            },
                        ],
                    }}
                />
                <NumberCard
                    data={{
                        name: "Items",
                        count: systemSummary.items,
                        detail: [
                            {
                                name: "Per task",
                                count: systemSummary.avgItemsPerTask,
                                color: "brand",
                            },
                        ],
                    }}
                />
            </Box>
        </Box>
    );
};

export default SummaryDashboard;
