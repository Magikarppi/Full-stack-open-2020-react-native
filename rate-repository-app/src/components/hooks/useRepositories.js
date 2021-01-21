import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = async () => {
    // setLoading(true);
    try {
      // const response = await fetch(
      //   'http://192.168.1.105:5000/api/repositories'
      // );
      // const jsonData = await response.json();
      // // setLoading(false);
      // setRepositories(jsonData);
      // setRepositories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repositories: data?.repositories,
    loading,
    refetch: fetchRepositories,
  };
};

export default useRepositories;
