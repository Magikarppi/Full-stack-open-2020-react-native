import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground,
    justifyContent: 'space-between',
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <Link to="/" component={TouchableWithoutFeedback}>
            <Text fontWeight="bold" fontSize="subheading" color="heading">
              Repositories
            </Text>
          </Link>
        </View>
        <View>
          <Link to="/signin" component={TouchableWithoutFeedback}>
            <Text fontWeight="bold" fontSize="subheading" color="heading">
              Sign in
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
