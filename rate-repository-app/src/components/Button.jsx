import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    borderRadius: 0.28,
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyButton = (props) => {
  return (
    <View style={{ ...styles.buttonContainer, ...props.style }}>
      <Button {...props} />
    </View>
  );
};

export default MyButton;
