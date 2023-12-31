import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { LineData as data } from "../data/chartData2";

const LineChart2 = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveLine
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100],
                        fontSize: 15,
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100],
                        fontSize: 15
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100],
                    fontSize: 13
                    
                }
            },
            tooltip: {
                container: {
                    color: colors.primary[500]
                },
            },
        }}
        // allows us to use own color schemee if on dashboard
        colors={{ datum: "color" }}
        margin={isDashboard ? {top: 50, right: 250, bottom: 50, left:60 } : { top: 10, right: 150, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 7,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 39,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickValues: 6,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Inbound Spending  (in billions)',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={12}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel={function(t){return t.xFormatted+ ":"+ t.x+": "+t.y}}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[ 
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 15,
                itemsSpacing: 20,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 25,
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    )
}

export default LineChart2;