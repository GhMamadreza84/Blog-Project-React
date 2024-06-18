import { useQuery } from "@apollo/client";
import React from "react";
import {GET_BLOGS_INFO} from "../../graphql/queries";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  return <div>Blogs</div>;
}

export default Blogs;
