import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENT } from "../../graphql/queries";
import { Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, errors } = useQuery(GET_POST_COMMENT, {
    variables: {
      slug,
    },
  });
  if (loading) return null;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Comments;
