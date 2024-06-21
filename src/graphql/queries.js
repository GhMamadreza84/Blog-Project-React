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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo(){
    author(where: {slug:""}){
      avatar{
        url
      }
      field
      name
      description{
        html
      }
      posts{
        coverPhoto{
          url
        }
        id
        slug
        title
      }
    }
  }
`;
export { GET_BLOGS_INFO, GET_AUTHORS_INFO,GET_AUTHOR_INFO };
