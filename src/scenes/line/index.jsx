import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartAll from "../../components/LineChartAll";

// linechart page which contains chart depicting country tourist arrivals between 2010-2021
const Line = () => {
    return (
        <Box m="20px">
            <Header title="Number of international tourist arrivals from 2010-2021" subtitle="In millions" />
            <Box style={{height: "80vh"}}>
                <LineChartAll />
            </Box>
        </Box>
    );
};

export default Line;
