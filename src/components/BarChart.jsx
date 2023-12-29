import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { BarData as data } from "../data/chartData";

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <ResponsiveBar
        data={data}
        theme={{
        // added
        axis: {
            domain: {
            line: {
            stroke: colors.grey[100],
            },
        },
        legend: {
            text: {
            fill: colors.grey[100],
            },
        },
        ticks: {
            line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
            },
            text: {
            fill: colors.grey[100],
            },
        },
        },
        legends: {
        text: {
            fill: colors.grey[100],
            fontSize: 13
        },
        },
        }}
        keys={["2010","2011","2012","2013", "2014","2015","2016", "2017", "2018", "2019", "2020", "2021"]}
        indexBy="country"
        margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "category10" }}
        tooltip={(data)=>{
            return data.id + ":" + "\n" + data.formattedValue;
        }}
        defs={[
        {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
        },
        {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
        },
        ]}
        borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Country", // changed
        legendPosition: "middle",
        legendOffset: 40,
        }}
        axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Tourist Arrivals (In Millions)", // changed
        legendPosition: "middle",
        legendOffset: -40,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
        }}
        legends={[
        {
            dataFrom: "keys",
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
            {
                on: "hover",
                style: {
                itemOpacity: 1,
                },
            },
            ],
        },
        ]}
        role="application"
        barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
        }}
    />
    );
};

export default BarChart;