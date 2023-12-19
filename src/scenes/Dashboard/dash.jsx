import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import LineChart15 from "../../components/LineChart1.5";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

// * If nivo does not work then reinstall with --legacy-peer-deps

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="International tourist arrivals in the Caribbean 2010-2021"/>
            </Box>

            {/* GRID & CHARTS */}
            <Box
            display="grid" // specifies we want to define box as a grid
            gridTemplateColumns="repeat(12, 1fr)" // "repeat(12, fr)" specifies that we want the total width of our display divided by the number of columns we want (12) 
            gridAutoRows="140px" // sets size for rows in a grid 
            gap="20px" // gap in btwn dashboard boxes
            >
                {/* ROW 1 */}
                {/* Each row spans 12 wide so each box has a gridColumn of span 3 (except row 1 span 4 since chart has more data). gridRow defaults to span 1 */}
                {/* Line Chart */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                        <Box height="620px" mt="-40px" mr="10px">
                            <LineChart isDashboard={true} />
                        </Box>
                    </Box>

                    {/* Row 2 */}
                    {/* Large Data Line Chart */}
                    <Box
                    gridColumn="span 12"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                        <Box height="460px" mt="-40px" mr="10px">
                            <LineChart15 isDashboard={true} />
                        </Box>
                    </Box>

                    {/* ROW 3 */}

                    {/* PIE CHART */}
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="30px"
                    >
                        <Box 
                            display="flex"
                            flexDirection="column"
                            height="260px"
                        >
                            <PieChart isDashboard={true} />
                        </Box>
                    </Box>
                    
                    {/* BAR CHART */}
                    <Box
                        gridColumn="span 8"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        <Box 
                            height="320px"
                            mt="-10px"
                        >
                            <BarChart isDashboard={true} />
                        </Box>
                    </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;