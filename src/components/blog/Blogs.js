import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h3>Loading ...</h3>;
  if (errors) return <h3>Error ...</h3>;
  console.log(data);
  return 
  <Grid container spacing={2}>
    
  </Grid>
  ;
}

export default Blogs;
