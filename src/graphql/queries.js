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
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlogInfo(){
     post(where: {slug:""}){
      author{
        avatar{
          url
          }
        name
        field
      }
      content{
        html
      }
      title
      coverPhoto{
        url 
      }
     }
  }
`;
export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
