import React from 'react';
import { View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const FormikTextInput = ({ styles, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const handleChange = (value) => {
    helpers.setValue(value);
  };

  let inputStyle = styles.formInput;
  if (showError) {
    inputStyle = { ...styles.formInput, borderColor: theme.colors.error };
  }

  return (
    <View style={inputStyle}>
      <TextInput
        onChangeText={(value) => handleChange(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
