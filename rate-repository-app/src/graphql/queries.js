import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  {
    repositories {
      edges {
        node {
          id
          name
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }
    }
  }
`;
