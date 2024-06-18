import React from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";

import { GET_BLOGS_INFO } from "../../graphql/queries";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h3>Loading ...</h3>;
  if (errors) return <h3>Error ...</h3>;
  console.log(data);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        Item
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        Item
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        Item
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        Item
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        Item
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        Item
      </Grid>
    </Grid>
  );
}

export default Blogs;
