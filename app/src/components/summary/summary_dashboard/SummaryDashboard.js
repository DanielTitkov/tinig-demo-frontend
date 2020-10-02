import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Heading } from "grommet";
import Loader from "react-loader";
import NumberCard from "../number_card/NumberCard";
import StatusCard from "../status_card/StatusCard";
import moment from "moment";
import { getSystemSummary } from "../../../store/actions/summaryActions";

const SummaryDashboard = () => {
    const dispatch = useDispatch();
    const summaryError = useSelector((state) => state.summary.error);
    const systemSummary = useSelector((state) => state.summary.systemSummary);
    const summaryLoading = useSelector((state) => state.summary.loading);

    useEffect(() => {
        dispatch(getSystemSummary());
    }, [dispatch]);
    // TODO: maybe move loader to page
    return (
        <Loader
            loaded={!summaryLoading}
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
            {systemSummary && (
                <Box flex gap="medium" pad="medium">
                    <Heading level="2" alignSelf="center">
                        System summary
                    </Heading>
                    <Box flex={false} direction="row-responsive" gap="small" wrap>
                        <StatusCard
                            data={{
                                status: summaryError ? "down" : "healthy",
                                date: moment().calendar(), // TODO: parse server time
                                color: summaryError ? "status-error" : "status-ok",
                            }}
                        />
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
                                        count: systemSummary.avgItemsPerTask
                                            ? Math.round(
                                                  (systemSummary.avgItemsPerTask + Number.EPSILON) *
                                                      100,
                                              ) / 100
                                            : null,
                                        color: "brand",
                                    },
                                ],
                            }}
                        />
                    </Box>
                </Box>
            )}
        </Loader>
    );
};

export default SummaryDashboard;
