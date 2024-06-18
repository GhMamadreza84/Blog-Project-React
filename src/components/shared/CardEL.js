import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

function CardEL({ title, slug, coverPhoto, author }) {
  // console.log(author.name);

  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}} />}
        title={
          <Typography component="p" variant="p" color="text.primary">
            {author.name}
          </Typography>
        }
      />
      <CardMedia />
      <CardContent></CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default CardEL;
