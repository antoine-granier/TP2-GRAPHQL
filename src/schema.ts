import gql from "graphql-tag";

export const typeDefs = gql`

  # type Track {
  #   id: ID!
  #   title: String!
  #   author: Author!
  #   thumbnail: String
  # }

  # type Author {
  #   id: ID!
  #   name: String!
  #   photo: String
  # }

  type People {
    id: String!
    name: String!
    eyeColor: String!
    films: [Film!]!
  }

  type Film {
    id: String!
    title: String!
    people: [People!]!
  }

  type Query {
    getFilms: [Film!]!
    getPeople: [People!]!
    # getTracks: [Track!]!
  }
`;