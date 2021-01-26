import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useContext } from 'react';
import AuthStorageContext from '../../contexts/AuthStorageContext';
import { AUTHORIZE } from '../../graphql/mutations';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    console.log('username in hook', username);
    try {
      const { data } = await mutate({
        variables: { username, password },
      });
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [signIn, result];
};

export default useSignIn;
