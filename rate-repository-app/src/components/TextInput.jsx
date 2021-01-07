import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {},
});

const TextInput = ({ error, ...props }) => {
  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
