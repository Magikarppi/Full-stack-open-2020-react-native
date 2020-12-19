import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  logo: theme.tinyLogo,
});

const RepositoryItem = ({ item }) => {
  const prettyStarsAndForks = (bigNum) => {
    const snf = bigNum / 1000;
    if (snf >= 1) {
      return `${Math.round(snf * 10) / 10}k`;
    }
  };

  return (
    <View style={styles.container.backgroundColor}>
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text color="primary">Language: {item.language}</Text>
      <Text>Stars: {prettyStarsAndForks(item.stargazersCount)}</Text>
      <Text>Forks: {prettyStarsAndForks(item.forksCount)}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
