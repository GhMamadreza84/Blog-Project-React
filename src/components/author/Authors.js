import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Grid, Typography } from "@mui/material";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h3>Loading ...</h3>;
  if (errors) return <h3>Errors ...</h3>;
  console.log(data);
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author) => (
        <Grid item xs={12} padding={2}>
          <a
            href={`/authors/${author.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Avatar src={author.avatar.url} />
            <Typography component="p" variant="p" color="text.color.secoundary">
              {author.name}
            </Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );
}

export default Authors;
