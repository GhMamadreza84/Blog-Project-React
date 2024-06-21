import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading)
    return (
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="gray"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    );
  if (errors) return <h3>Errors ...</h3>;
  console.log(data);
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#373737",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography
                component="p"
                variant="p"
                color="text.color.secoundary"
              >
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
