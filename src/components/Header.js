import React from "react";
import { AppBar } from "@mui/material";
import Typography from "@mui/material/Typography";

const Header = () => {
    return (
        <AppBar position="absolute">
            <Typography component="div" variant="h5" align="center">Amplify Todo Collaborator</Typography>
        </AppBar>
    )
};

export default Header;