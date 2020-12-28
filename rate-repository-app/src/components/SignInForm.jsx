import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;
