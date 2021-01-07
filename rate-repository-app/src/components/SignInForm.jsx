import React from 'react';
import { View, Button } from 'react-native';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';
// import Button from './Button';

const SignInForm = ({ styles, onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" styles={styles} />
      <FormikTextInput
        name="password"
        placeholder="Password"
        styles={styles}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sign in"
          onPress={onSubmit}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};

export default SignInForm;
