import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../../graphql/queries";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO(), {
    variables: {
      slug,
    },
  });
  return <div>Author page</div>;
}

export default AuthorPage;
