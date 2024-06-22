import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import Loader from "../shared/Loader";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });
  console.log(data);

  if (loading) return <Loader />;
  if (errors) return <h3>Errors ...</h3>;

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
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            height={500}
            style={{ borderRadius: 15 }}
          />
          <Grid item xs={12} mt={7} display="flex" alignItems="center">
            <Avatar
              src={data.post.author.avatar.url}
              sx={{ width: 80, height: 80, marginLeft: 2 }}
            />
            <Box component="div">
              <Typography component="p" variant="h5" fontWeight={700}>
                {data.post.author.name}
              </Typography>
              <Typography
                component="p"
                variant="p"
                color="text.color.secondary"
              >
                {data.post.author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.post.content.html),
              }}
            ></div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slus={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
