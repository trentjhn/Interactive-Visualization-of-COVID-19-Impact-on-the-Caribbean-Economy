import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

// piechart page which contains chart depicting country tourist arrivals between 2016-2021
const Pie = () => {
return (
    <Box m="20px">
        <Header title="Carribean Tourist Arrivals" subtitle="(2016-2021)" />
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
);
};

export default Pie;