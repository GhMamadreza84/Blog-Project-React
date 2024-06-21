import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });
  console.log(params);
  return <div>BlogPage</div>;
}

export default BlogPage;
