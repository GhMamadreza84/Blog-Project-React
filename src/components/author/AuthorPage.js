import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });

  if (loading) return <h3>Loading ...</h3>;
  if (errors) return <h3>Errors ...</h3>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5">
            {data.author.name}
          </Typography>
          <Typography component="h3" variant="h5">
            {data.author.field}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
