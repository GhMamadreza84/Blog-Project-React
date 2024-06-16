import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
function Header() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography component="h1" variant="h5" flex={1}>
            وبلاگ محمدرضا قدیری
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
