import React from "react";
import DashboardChart from "../dashboard_chart/DashboardChart";

const DashboardBody = () => {
    const data = [
        {
            title: "Milk prices",
            type: "price",
            data: [
                {
                    date: `2020-07-01`,
                    price: 15,
                    priceMax: 20,
                    priceMin: 10,
                },
                {
                    date: `2020-07-02`,
                    price: 20,
                    priceMax: 25,
                    priceMin: 12,
                },
                {
                    date: `2020-07-03`,
                    price: 18,
                    priceMax: 25,
                    priceMin: 12,
                },
                {
                    date: `2020-07-04`,
                    price: 22,
                    priceMax: 28,
                    priceMin: 17,
                },
            ],
        },
        {
            title: "Bread prices",
            type: "price",
            data: [],
        },
    ];

    return (
        <div>
            {data.map((d) => (
                <DashboardChart chartData={d} key={d.title} />
            ))}
        </div>
    );
};

export default DashboardBody;
