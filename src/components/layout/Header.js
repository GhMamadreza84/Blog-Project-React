import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="h1" variant="h5" flex={1}>وبلاگ محمدرضا قدیری</Typography>
        <BookIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
