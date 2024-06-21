import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Container, Grid } from "@mui/material";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });
  console.log(data);
  // console.log(params);
  return(
    <Container maxWidth="lg">
      <Grid contianer>

      </Grid>
    </Container>
  );
}

export default BlogPage;
