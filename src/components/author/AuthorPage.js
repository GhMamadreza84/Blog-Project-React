import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });

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
  const { author } = data;
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
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="h3" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
