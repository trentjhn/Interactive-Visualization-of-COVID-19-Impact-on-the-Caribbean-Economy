import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { PieData as data } from "../data/chartData";

const PieChart = ({ isDashboard = false }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
    <ResponsivePie
    data={data}
    theme={{
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
        tooltip: {
            text:
            {
                fill: colors.grey[100],
            }
        }
    }}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={colors.grey[100]}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    enableArcLabels={isDashboard ? false : true}
    arcLabelsRadiusOffset={0.4}
    arcLabelsSkipAngle={7}
    arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 10]],
    }}
    defs={[
        {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
        },
        {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
        },
    ]}
    legends={[
        {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 10,
        translateY: 50,
        itemsSpacing: 0,
        itemWidth: isDashboard ? 60 : 100,
        itemHeight: 0,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: isDashboard ? 10 : 18,
        symbolShape: "circle",
        effects: [
            {
            on: "hover",
            style: {
                itemTextColor: "#fff",
            },
            },
        ],
        },
    ]}
    />
);
};

export default PieChart;