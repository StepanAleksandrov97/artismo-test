import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {CustomerButton} from './customerButton';

export const Form = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="jane@example.com"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        style={styles.input}
        textContentType="emailAddress"
      />
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        style={styles.input}
        textContentType="password"
      />
      <CustomerButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: 343,
    height: 52,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 16,
    padding: 17,
  },
});
