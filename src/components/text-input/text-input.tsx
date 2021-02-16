import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {TextFieldProps} from '../../typings';

export const TextInputField = (props: Partial<TextFieldProps>) => {
  const showError = !props.active && props.touched && !!props.error;

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
      />
      {showError && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};
//TODO styles without height changes
const styles = StyleSheet.create({
  container: {
    height: 62,
    marginBottom: 16,
  },
  input: {
    height: 52,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 17,
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
});
