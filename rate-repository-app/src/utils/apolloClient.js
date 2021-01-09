import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.1.105:5000/grapghql',
  });
};

export default createApolloClient;
