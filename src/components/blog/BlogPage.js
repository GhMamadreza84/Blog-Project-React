import React from "react";
import { useParams } from "react-router-dom";

function BlogPage() {
  const params = useParams();
  console.log(params)
  return <div>BlogPage</div>;
}

export default BlogPage;
