import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid } from "@mui/material";

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
      <Grid container>
        <Grid item>
          <Avatar src={data.author.avatar.url} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
