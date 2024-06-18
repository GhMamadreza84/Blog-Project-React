import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      title
      slug
      id
      coverPhoto {
        url
      }
      author {
        avatar {
          url
        }
        name
      }
    }
  }
`;

export { GET_BLOGS_INFO };
