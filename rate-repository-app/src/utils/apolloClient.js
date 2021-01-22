import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const uri = Constants.manifest.extra.apollo_uri;
  return new ApolloClient({
    uri: uri,
  });
};

export default createApolloClient;
