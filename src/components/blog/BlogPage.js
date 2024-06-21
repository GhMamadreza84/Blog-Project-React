import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid contianer>
        <Grid item xs="12" mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
