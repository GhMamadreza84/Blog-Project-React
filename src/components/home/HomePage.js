import React from "react";
import { Container, Typography, Grid } from "@mui/material";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography>نویسنده ها</Typography>
        </Grid>
        <Grid item>
          <Typography>مقالات</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
