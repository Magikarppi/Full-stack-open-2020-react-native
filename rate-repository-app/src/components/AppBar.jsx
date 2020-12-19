import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert('pressed')}>
        <Text fontWeight="bold" fontSize="subheading" color="heading">
          Repositories
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
