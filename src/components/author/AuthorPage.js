import React from "react";
import { useParams } from "react-router-dom";

function AuthorPage() {
  const params = useParams();
  console.log(params);
  return <div>Author page</div>;
}

export default AuthorPage;
