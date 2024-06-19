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

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO };
