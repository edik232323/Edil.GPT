import { Chart } from "react-google-charts";

const data = [
    ["Task", "Hours per Day"],
    ["13/12/23",90],
    ["14/12/23",63],
    ["15/12/23",150],
    ["16/12/23",232],
    ["17/12/23",67],
    ["18/12/23",102],
    ["19/12/23",123],
];

function ActivityWeek() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"100%"}
        />
    )
}

export default ActivityWeek