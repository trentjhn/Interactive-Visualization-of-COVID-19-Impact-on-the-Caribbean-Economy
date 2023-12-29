import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart2 from "../../components/LineChart2";

// linechart page which contains chart depicting country tourist contribution to GDP
const Line2 = () => {
    return (
        <Box m="20px">
            <Header title="Tourist contribution to GDP" subtitle="In millions" />
            <Box style={{height: "80vh"}}>
                <LineChart2 />
            </Box>
        </Box>
    );
};

export default Line2;
