import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>نویسنده ها</Typography>
          <Authors />
        </Grid>
        <Grid item>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>مقالات</Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
