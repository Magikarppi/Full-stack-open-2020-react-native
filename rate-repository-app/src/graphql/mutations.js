import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation AUTHORIZE($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
