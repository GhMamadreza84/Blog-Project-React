import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

function CardEL({ title, slug, coverPhoto, author }) {
  console.log(props);
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      <CardHeader
      avatar />
      <CardMedia />
      <CardContent></CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default CardEL;
