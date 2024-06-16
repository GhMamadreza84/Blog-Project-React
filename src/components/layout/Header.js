import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="h1" variant="h5"></Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
