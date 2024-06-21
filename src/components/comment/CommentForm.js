import React from "react";
import { Grid } from "@mui/material";

function CommentForm({ slug }) {
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    ></Grid>
  );
}

export default CommentForm;
