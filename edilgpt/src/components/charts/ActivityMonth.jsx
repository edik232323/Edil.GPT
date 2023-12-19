import { Chart } from "react-google-charts";
import React from "react";

const data = [
    ["Task", "Hours per Day"],
    ["8/23",123],
    ["9/23",332],
    ["10/23",456],
    ["11/23",200],
    ["12/23",750],
];

function ActivityMonth() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"100%"}
        />
    )
}

export default ActivityMonth