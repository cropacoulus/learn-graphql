const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    getAllPosts: [Post!]
    getSinglePost(postId: Int!): Post
  }

  type Post {
    id: Int!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]
    createdAt: String
  }

  extend type Mutation {
    createPost(title: String!, content: String!): CreatePostResponse
  }

  type CreatePostResponse {
    id: Int!
    title: String!
    content: String!
    createdAt: String!
  }
`;
