import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';

import SignInForm from './SignInForm';
import theme from '../theme';
import useSignIn from './hooks/useSignIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    borderStyle: 'solid',
    width: '60%',
    borderWidth: 2,
    borderColor: theme.colors.textPrimary,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  formSubmitButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  buttonContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  };
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('username', username);

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.username) {
      errors.username = 'Required';
    }

    if (values.password && values.password.length < 5) {
      errors.password = 'Password must be at least 5 characters long';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ handleSubmit }) => (
        <SignInForm styles={styles} onSubmit={handleSubmit} />
      )}
    </Formik>
  );
};

export default SignIn;
