import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import LineChart2 from "../../components/LineChart2";
import PieChart2 from "../../components/PieChart2";
import GeographyChart from "../../components/GeographyChart";

// * If nivo does not work then reinstall with --legacy-peer-deps

const Dashboard2 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box 
            mr='20px' 
            ml='20px'
            mb='20px'
        >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Tourist Spending in the Caribbean Between 2010-2021" />
            </Box>

            {/* GRID & CHARTS */}
            <Box
            display="grid" // specifies we want to define box as a grid
            gridTemplateColumns="repeat(12, 1fr)" // "repeat(12, fr)" specifies that we want the total width of our display divided by the number of columns we want (12) 
            gridAutoRows="140px" // sets size for rows in a grid 
            gap="20px" // gap in btwn dashboard boxes
            >
                {/* ROW 1 */}
                {/* Each row spans 12 wide so each box has a gridColumn of span 3. gridRow defaults to span 1 */}


                {/* ROW 2 */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 6"
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
                        <Box height="830px" mt="-40px" mr="10px">
                            <LineChart2 isDashboard={true} />
                        </Box>
                    </Box>

                    {/* GEOGRAPHY CHART */}
                    <Box
                        gridColumn="span 6"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="30px"
                    >
                        <Typography 
                            variant="h5" 
                            fontWeight="600" 
                            sx={{ mb: "15px"}}
                        >
                            Geography
                        </Typography>
                        <Box 
                            height="200px"
                        >
                            <GeographyChart isDashboard={true} />
                        </Box>
                    </Box>
                    {/* ROW 3 */}

                    {/* PIE CHART */}
                    <Box
                        gridColumn="span 6"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="30px"
                    >
                        <Typography 
                            variant="h5" 
                            fontWeight="600"
                        >
                            Total contribution of tourism to the GDP in the Caribbean in 2021
                        </Typography>
                        <Box 
                            display="flex"
                            flexDirection="column"
                            height="300px"
                            mt="-30px"
                        >
                            <PieChart2 isDashboard={true} />
                        </Box>
                    </Box>
            </Box>
        </Box>
    )
}

export default Dashboard2;