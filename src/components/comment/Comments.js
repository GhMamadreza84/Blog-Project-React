import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENT } from "../../graphql/queries";

function Comments({slug}) {
  const { loading, data, errors } = useQuery(GET_POST_COMMENT, {
    variables: {
      slug,
    },
  });
  console.log({ loading, data  });
  return <div></div>;
}

export default Comments;
