import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
    //allows us to toggle different states based on colorMode
    const theme = useTheme();
    //anytime we want to use color mode in MaterialUi we can grab it from useTheme()
    const colorMode = useContext(ColorModeContext);

    //use box because we can write css properties directly in component
    return (
    <Box display="flex" justifyContent="flex-end" p={2}>
        <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />    
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>
        </Box>
    </Box>
    )
};

export default Topbar;