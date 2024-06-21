import React from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";

import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading)
    return (
      <Loader />
    );
  if (errors) return <h3>Error ...</h3>;
  console.log(data);
  return (
    <Grid container maxWidth="xl" display="flex" justifyContent="center">
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id} pl={2} mb={1}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
